import { Request, Response } from 'express';
import { TreesService } from 'src/services/trees.service';

/**
 * Controller class for trees
 * @class
 */
export class TreesController {
  private service: TreesService;

  constructor() {
    this.service = new TreesService();
  }

  /**
   * Get all trees
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
   * Get tree
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
}

const treesController = new TreesController();

export default treesController;