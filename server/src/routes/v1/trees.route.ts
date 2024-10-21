import { Router } from 'express';
import morgan from 'morgan';

import treesController from 'src/controllers/trees.controller';

import { tryCatch } from 'src/middleware/tryCatch.middleware';
import validateRequestSchema from 'src/middleware/validateRequestSchema.middleware';

/**
 * Router for trees.
 * @type {Router}
 */
const treesRouter: Router = Router();

if (process.env.NODE_ENV !== "test") {
  treesRouter.use(morgan("combined"));
}

/**
 * Route for trees.
 * This route get all trees.
 * @name GET /v1/trees/
 * @function
 * @memberof usersRouter
 * @inner
 */
treesRouter.get(
  "/",
  validateRequestSchema,
  tryCatch(treesController.getAll.bind(treesController))
);

/**
 * Route for trees.
 * This route get all trees.
 * @name GET /v1/trees/:id
 * @function
 * @memberof usersRouter
 * @inner
 */
treesRouter.get(
  "/:id",
  validateRequestSchema,
  tryCatch(treesController.getById.bind(treesController))
);

export default treesRouter;
