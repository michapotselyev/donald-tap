import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

import { User } from 'src/models';

interface CustomRequest extends Request {
  user?: User;
}

export const authMiddleware = async (req: CustomRequest, res: Response, next: NextFunction) => {
  try {
    const token = req.headers.authorization?.split(' ')[1];

    if (!token) {
      return res.status(401).json({ message: 'No token provided' });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET!);

    const user = await User.findOne({
      where: {
        id: (decoded as { id: number }).id,
        token,
      },
    });

    if (!user) {
      return res.status(401).json({ message: 'Invalid token' });
    }

    req.user = user;

    next();
  } catch (error) {
    return res.status(401).json(
      {
        message: 'Unauthorized',
        error: (error as Error).message
      }
    );
  }
};
