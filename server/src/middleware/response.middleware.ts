import { Response } from 'express';

/**
 * Sends a JSON response with the specified status code and values.
 * @param status - The HTTP status code of the response.
 * @param values - The values to be included in the response body.
 * @param res - The Express Response object.
 */
const response = (status: number, values: any, res: Response): void => {
  const data = {
    status,
    values,
  };
  res.status(data.status).json(data);
  res.end();
};

export default response;
