import { Request, Response } from 'express';

import "dotenv/config";

/**
 * Controller class for bot webhook operations.
 * @class
 */
export class BotController {
  // constructor() {
  //   this.service = new UserService();
  // }

  /**
   * Webhook for bot
   * @param {import("express").Request} req The Express request object.
   * @param {import("express").Response} res The Express response object.
   * @returns {Promise<{code: number, values: any}>} The result of the operation.
   */
  async webhook(req: Request, res: Response): Promise<{ code: number, values: any }> {
    console.log(req.body);

    // const result = await this.service.create(userData);
    // return { code: result.code, values: result.values };
    return  { code: 200, values: "OK" };
  }
}

const botController = new BotController();

export default botController;
