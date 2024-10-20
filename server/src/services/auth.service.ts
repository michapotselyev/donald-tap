import jwt from "jsonwebtoken";

import { User } from "src/models";
import { logger } from "src/utils/logger";

export class AuthService {
  public async auth(
    telegramId: string,
    firstName: string,
    lastName: string,
    username: string,
    avatarUrl: string
  ) {
    try {
      let user = await User.findOne({ where: { telegramId } });

      if (!user) {
        user = await User.create({
          telegramId,
          firstName,
          lastName,
          username,
          avatarUrl,
          exp: 0,
          level: 0,
          levelPoints: 0,
        });
      } else {
        await user.update({ firstName, lastName, username, avatarUrl });
      }

      const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET!, {
        expiresIn: '1h',
      });

      await user.update({ token });

      return { code: 200, values: { token } };
    } catch (error) {
      logger.error(`Error while proccesing auth: ${(error as Error).message}`);
      return { code: 500, values: `Error while proccesing auth: ${error}` };
    }
  }
}
