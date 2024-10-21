import { Request, Response } from 'express';
import { UsersService } from 'src/services/users.service';

/**
 * Controller class for users
 * @class
 */
export class UsersController {
  private service: UsersService;

  constructor() {
    this.service = new UsersService();
  }

  /**
   * Get all users
   * @param {import("express").Request} req The Express request object.
   * @param {import("express").Response} res The Express response object.
   * @returns {Promise<{code: number, values: any}>} The result of the operation.
   */
  public async getAll(req: Request, res: Response):
    Promise<{ code: number, values: any }> {
    const { code, values } = await this.service.getAll();

    return { code, values };
  }

  /**
   * Get user by id
   * @param {import("express").Request} req The Express request object.
   * @param {import("express").Response} res The Express response object.
   * @returns {Promise<{code: number, values: any}>} The result of the operation.
   */
  public async getById(req: Request, res: Response):
    Promise<{ code: number, values: any }> {
    const { id } = req.params;

    const { code, values } = await this.service.getById(id);

    return { code, values };
  }

  /**
   * Get user's skills by id
   * @param {import("express").Request} req The Express request object.
   * @param {import("express").Response} res The Express response object.
   * @returns {Promise<{code: number, values: any}>} The result of the operation.
   */
  public async getUserSkillsById(req: Request, res: Response):
    Promise<{ code: number, values: any }> {
    const { id } = req.params;

    const { code, values } = await this.service.getUserSkillsById(id);

    return { code, values };
  }

  /**
   * Get user's referrals by id
   * @param {import("express").Request} req The Express request object.
   * @param {import("express").Response} res The Express response object.
   * @returns {Promise<{code: number, values: any}>} The result of the operation.
   */
  public async getUserReferralsById(req: Request, res: Response):
    Promise<{ code: number, values: any }> {
    const { id } = req.params;

    const { code, values } = await this.service.getUserReferralsById(id);

    return { code, values };
  }

  /**
   * Get user's referrals by id
   * @param {import("express").Request} req The Express request object.
   * @param {import("express").Response} res The Express response object.
   * @returns {Promise<{code: number, values: any}>} The result of the operation.
   */
  public async giveReferralRewardToUser(req: Request, res: Response):
    Promise<{ code: number, values: any }> {
    const { userId } = req.body;

    const { code, values } = await this.service.giveReferralRewardToUser(userId);

    return { code, values };
  }

  /**
   * Get user's tasks by id
   * @param {import("express").Request} req The Express request object.
   * @param {import("express").Response} res The Express response object.
   * @returns {Promise<{code: number, values: any}>} The result of the operation.
   */
  public async getUserTasksById(req: Request, res: Response):
    Promise<{ code: number, values: any }> {
    const { id } = req.params;

    const { code, values } = await this.service.getUserTasksById(id);

    return { code, values };
  }

  /**
   * Add new task as complited to user
   * @param {import("express").Request} req The Express request object.
   * @param {import("express").Response} res The Express response object.
   * @returns {Promise<{code: number, values: any}>} The result of the operation.
   */
  public async addComplitedTaskToUser(req: Request, res: Response):
    Promise<{ code: number, values: any }> {
    const { userId, taskId } = req.body;

    const { code, values } = await this.service.addComplitedTaskToUser(userId, taskId);

    return { code, values };
  }

  /**
   * Get user's images by id
   * @param {import("express").Request} req The Express request object.
   * @param {import("express").Response} res The Express response object.
   * @returns {Promise<{code: number, values: any}>} The result of the operation.
   */
  public async getUserImagesById(req: Request, res: Response):
    Promise<{ code: number, values: any }> {
    const { id } = req.params;

    const { code, values } = await this.service.getUserImagesById(id);

    return { code, values };
  }

  /**
   * Get user tree progress
   * @param {import("express").Request} req The Express request object.
   * @param {import("express").Response} res The Express response object.
   * @returns {Promise<{code: number, values: any}>} The result of the operation.
   */
  public async getUserTreeProgressById(req: Request, res: Response):
    Promise<{ code: number, values: any }> {
    const { id } = req.params;

    const { code, values } = await this.service.getUserTreeProgressById(id);

    return { code, values };
  }

  /**
   * Post tree skill to user
   * @param {import("express").Request} req The Express request object.
   * @param {import("express").Response} res The Express response object.
   * @returns {Promise<{code: number, values: any}>} The result of the operation.
   */
  public async addTreeSkillToUser(req: Request, res: Response):
    Promise<{ code: number, values: any }> {
    const { skillId, userId } = req.body;

    const { code, values } = await this.service.addTreeSkillToUser(skillId, userId);

    return { code, values };
  }
}

const usersController = new UsersController();

export default usersController;
