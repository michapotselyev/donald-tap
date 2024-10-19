import { Request, Response, NextFunction } from 'express';

import response from './response.middleware';

/**
 * Wraps an asynchronous controller function with a try-catch block to handle errors.
 * @param controller - The controller function to be executed.
 * @returns Returns an Express middleware function.
 */
export const tryCatch = (
  controller: (req: Request, res: Response) => Promise<{ code: number; values: any } | void>
) => async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const result = await controller(req, res);
    if (result) {
      response(result.code, result.values, res);
    } else {
      response(200, { values: 'Success' }, res);
    }
  } catch (error) {
    response(500, { error }, res);
    return next(error);
  }
};
