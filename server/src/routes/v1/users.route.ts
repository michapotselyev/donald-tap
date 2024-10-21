import { Router } from 'express';
import morgan from 'morgan';

import usersController from 'src/controllers/users.controller';

import {
  complitedTaskToUserValidateChainMethod,
  referralRewardToUserValidateChainMethod,
  treeSkillToUserValidateChainMethod
} from 'src/validations/user.validation';

import { tryCatch } from 'src/middleware/tryCatch.middleware';
import validateRequestSchema from 'src/middleware/validateRequestSchema.middleware';

/**
 * Router for users.
 * @type {Router}
 */
const usersRouter: Router = Router();

if (process.env.NODE_ENV !== "test") {
  usersRouter.use(morgan("combined"));
}

/**
 * Route for user.
 * This route get all users.
 * @name GET /v1/users/
 * @function
 * @memberof usersRouter
 * @inner
 */
usersRouter.get(
  "/",
  validateRequestSchema,
  tryCatch(usersController.getAll.bind(usersController))
);

/**
 * Route for user.
 * This route get info about user by id.
 * @name GET /v1/users/:id
 * @function
 * @memberof userRouter
 * @inner
 */
usersRouter.get(
  "/:id",
  validateRequestSchema,
  tryCatch(usersController.getById.bind(usersController))
);

/**
 * Route for user's skills.
 * This route get all users skills.
 * @name GET /v1/users/skills/:id
 * @function
 * @memberof userRouter
 * @inner
 */
usersRouter.get(
  "/skills/:id",
  validateRequestSchema,
  tryCatch(usersController.getUserSkillsById.bind(usersController))
);

/**
 * Route for user's referrals.
 * This route get all users referrals.
 * @name GET /v1/users/referrals/:id
 * @function
 * @memberof userRouter
 * @inner
 */
usersRouter.get(
  "/referrals/:id",
  validateRequestSchema,
  tryCatch(usersController.getUserReferralsById.bind(usersController))
);

/**
 * Route for user's referrals reward.
 * This route give reward from referrals to user.
 * @name POST /v1/users/referrals/reward
 * @function
 * @memberof userRouter
 * @inner
 */
usersRouter.post(
  "/referrals/reward",
  referralRewardToUserValidateChainMethod,
  validateRequestSchema,
  tryCatch(usersController.giveReferralRewardToUser.bind(usersController))
);

/**
 * Route for user's tasks.
 * This route get all users tasks.
 * @name GET /v1/users/tasks/:id
 * @function
 * @memberof userRouter
 * @inner
 */
usersRouter.get(
  "/tasks/:id",
  validateRequestSchema,
  tryCatch(usersController.getUserTasksById.bind(usersController))
);

/**
 * Route for user's complited task.
 * This route add new complited task to user.
 * @name POST /v1/users/tasks/
 * @function
 * @memberof userRouter
 * @inner
 */
usersRouter.post(
  "/tasks",
  complitedTaskToUserValidateChainMethod,
  validateRequestSchema,
  tryCatch(usersController.addComplitedTaskToUser.bind(usersController))
);

/**
 * Route for user's images.
 * This route get all users images.
 * @name GET /v1/users/images/:id
 * @function
 * @memberof userRouter
 * @inner
 */
usersRouter.get(
  "/images/:id",
  validateRequestSchema,
  tryCatch(usersController.getUserImagesById.bind(usersController))
);

/**
 * Route for user's tree progress.
 * This route get user tree progress.
 * @name GET /v1/users/tree/:id
 * @function
 * @memberof userRouter
 * @inner
 */
usersRouter.get(
  "/tree/:id",
  validateRequestSchema,
  tryCatch(usersController.getUserTreeProgressById.bind(usersController))
);

/**
 * Route for add tree skill for user.
 * This route add for user new skill from tree.
 * @name POST /v1/users/tree
 * @function
 * @memberof userRouter
 * @inner
 */
usersRouter.post(
  "/tree",
  treeSkillToUserValidateChainMethod,
  validateRequestSchema,
  tryCatch(usersController.addTreeSkillToUser.bind(usersController))
);

export default usersRouter;
