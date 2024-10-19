import { Request, Response, NextFunction } from 'express';

/**
 * Middleware to authenticate bot by matching token with the server's stored token.
 * @param req - The Express request object.
 * @param res - The Express response object.
 * @param next - The next middleware function.
 */
export const authenticate = (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers['x-bot-token'];

  if (!token) {
    return res.status(401).json({ message: 'Bot token is required' });
  }

  if (token === process.env.BOT_TOKEN) {
    next();
  } else {
    return res.status(403).json({ message: 'Invalid bot token' });
  }
};
