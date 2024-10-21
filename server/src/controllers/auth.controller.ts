import { Request, Response } from 'express';
import "dotenv/config";
import { AuthService } from "src/services/auth.service";

/**
 * Controller class for authentication operations.
 * @class
 */
export class AuthController {
  private service: AuthService;

  constructor() {
    this.service = new AuthService();
  }

  /**
   * Auth to server.
   * @param {import("express").Request} req The Express request object.
   * @param {import("express").Response} res The Express response object.
   * @returns {Promise<{code: number, values: any}>} The result of the operation.
   */
  public async auth(req: Request, res: Response): Promise<{code: number, values: any}> {
    const {
      telegramId,
      firstName,
      lastName,
      username,
      avatarUrl
    } = req.body;

    const { code, values } = await this.service.auth(
      telegramId,
      firstName,
      lastName,
      username,
      avatarUrl
    );

    return { code, values };
  }
}

const authController = new AuthController();

export default authController;
