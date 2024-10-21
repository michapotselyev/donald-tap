import { body } from "express-validator";

/**
 * Validation chain method for adding tree skill to user
 */
export const treeSkillToUserValidateChainMethod = [
  body("skillId")
    .exists({ checkFalsy: true })
    .withMessage("Skill ID must be provided")
    .isInt({ min: 1 })
    .withMessage("Skill ID must be a positive integer"),

  body("userId")
    .exists({ checkFalsy: true })
    .withMessage("User ID must be provided")
    .isInt({ min: 1 })
    .withMessage("User ID must be a positive integer"),
];

/**
 * Validation chain method for giving reward from referrals to user
 */
export const referralRewardToUserValidateChainMethod = [
  body("userId")
    .exists({ checkFalsy: true })
    .withMessage("User ID must be provided")
    .isInt({ min: 1 })
    .withMessage("User ID must be a positive integer"),
];

/**
 * Validation chain method for adding new task
 * as complited to user
 */
export const complitedTaskToUserValidateChainMethod = [
  body("userId")
    .exists({ checkFalsy: true })
    .withMessage("User ID must be provided")
    .isInt({ min: 1 })
    .withMessage("User ID must be a positive integer"),

  body("taskId")
    .exists({ checkFalsy: true })
    .withMessage("User ID must be provided")
    .isInt({ min: 1 })
    .withMessage("User ID must be a positive integer"),
];
