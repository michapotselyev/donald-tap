import jwt from "jsonwebtoken";
import { Request, Response } from 'express';
import "dotenv/config";

import { User } from "src/models";

/**
 * Controller class for user authentication operations.
 * @class
 */
export class AuthController {
  // constructor() {
  //   this.service = new UserService();
  // }

  /**
   * Auth to server.
   * @param {import("express").Request} req The Express request object.
   * @param {import("express").Response} res The Express response object.
   * @returns {Promise<{code: number, values: any}>} The result of the operation.
   */
  public async auth(req: Request, res: Response): Promise<{code: number, values: any}> {
    const { telegramId, firstName, lastName, username, avatarUrl } = req.body;

    let user = await User.findOne({ where: { telegramId } });

    if (!user) {
      user = await User.create({
        telegramId,
        firstName,
        lastName,
        username,
        avatarUrl,
      });
    } else {
      await user.update({ firstName, lastName, username, avatarUrl });
    }

    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET!, {
      expiresIn: '1h',
    });

    return { code: 200, values: { token } }
  }
}

const authController = new AuthController();

export default authController;
