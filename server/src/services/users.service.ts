import {
  Skill,
  SkillBranch,
  Task,
  User,
  UserImage,
  UserReferral,
  UserSkill,
  UserSkillProgress,
  UserTask
} from "src/models";
import { SkillAttributes } from "src/models/Skill.model";
import { SkillBranchAttributes } from "src/models/SkillBranch.model";
import { logger } from "src/utils/logger";

interface SkillWithBranch extends SkillAttributes {
  branch?: SkillBranchAttributes;
}

export class UsersService {
  public async getAll() {
    try {
      const users = await User.findAll();
      return { code: 200, values: users };
    } catch (error) {
      logger.error(`Error while fetching users: ${(error as Error).message}`);
      return { code: 500, values: `Error while proccesing auth: ${error}` };
    }
  }

  public async getById(id: string) {
    try {
      let user = await User.findByPk(id);

      if (!user) {
        user = await User.findOne({ where: { telegramId: id } });
      }

      if (!user) {
        return { code: 404, values: `User with ID or Telegram ID ${id} not found.` };
      }

      return { code: 200, values: user };
    } catch (error) {
      logger.error(
        `Error while fetching user by ID or Telegram ID: ${(error as Error).message}`
      );
      return { code: 500, values: `Error while processing request: ${error}` };
    }
  }

  public async getUserSkillsById(id: string) {
    try {
      let user = await User.findByPk(id);

      if (!user) {
        user = await User.findOne({ where: { telegramId: id } });
      }

      if (!user) {
        return { code: 404, values: `User with ID or Telegram ID ${id} not found.` };
      }

      const userSkills = await UserSkill.findAll({
        where: { userId: user.id },
      });

      return { code: 200, values: userSkills };
    } catch (error) {
      logger.error(
        `Error while fetching user skills by ID or Telegram ID: ${(error as Error).message}`
      );
      return { code: 500, values: `Error while processing request: ${error}` };
    }
  }

  public async getUserReferralsById(id: string) {
    try {
      let user = await User.findByPk(id);

      if (!user) {
        user = await User.findOne({ where: { telegramId: id } });
      }

      if (!user) {
        return { code: 404, values: `User with ID or Telegram ID ${id} not found.` };
      }

      const referrals = await UserReferral.findAll({
        where: { referrerId: user.id },
      });

      return { code: 200, values: referrals };
    } catch (error) {
      logger.error(
        `Error while fetching user referrals by ID or Telegram ID: ${(error as Error).message}`
      );
      return { code: 500, values: `Error while processing request: ${error}` };
    }
  }

  public async giveReferralRewardToUser(userId: number) {
    try {
      const user = await User.findByPk(userId);
      if (!user) {
        return { code: 404, values: `User with ID ${userId} not found.` };
      }

      const referrals = await UserReferral.findAll({
        where: { referrerId: userId }
      });

      if (!referrals || referrals.length === 0) {
        return { code: 400, values: `No referrals found for user with ID ${userId}.` };
      }

      const totalEarnedExp = referrals.reduce((total, referral) => {
        return total + referral.totalEarn;
      }, 0);

      if (totalEarnedExp === 0) {
        return { code: 400, values: `No earnings from referrals for user with ID ${userId}.` };
      }

      user.exp += totalEarnedExp;

      await user.save();

      return {
        code: 200,
        values: `User with ID ${userId} earned ${totalEarnedExp} EXP from referrals.`
      };
    } catch (error) {
      logger.error(
        `Error while giving reward from referrals to user: ` +
        `${(error as Error).message}`
      );
      return { code: 500, values: `Error while processing request: ${error}` };
    }
  }

  public async getUserTasksById(id: string) {
    try {
      let user = await User.findByPk(id);

      if (!user) {
        user = await User.findOne({ where: { telegramId: id } });
      }

      if (!user) {
        return { code: 404, values: `User with ID or Telegram ID ${id} not found.` };
      }

      const tasks = await UserTask.findAll({
        where: { userId: user.id },
      });

      return { code: 200, values: tasks };
    } catch (error) {
      logger.error(
        `Error while fetching user tasks by ID or Telegram ID: ${(error as Error).message}`
      );
      return { code: 500, values: `Error while processing request: ${error}` };
    }
  }

  public async addComplitedTaskToUser(userId: number, taskId: number) {
    try {
      const user = await User.findByPk(userId);
      if (!user) {
        return { code: 404, values: `User with ID ${userId} not found.` };
      }

      const task = await Task.findByPk(taskId);
      if (!task) {
        return { code: 404, values: `Task with ID ${taskId} not found.` };
      }

      const existingUserTask = await UserTask.findOne({
        where: { userId, taskId }
      });
      if (existingUserTask) {
        return { code: 400, values: `Task already completed by user.` };
      }

      await UserTask.create({
        userId,
        taskId,
        isCompleted: true
      });

      const taskReward = task.expReward;
      user.exp += taskReward;
      await user.save();

      const referral = await UserReferral.findOne({
        where: { referredUserId: userId }
      });

      if (referral) {
        const referralReward = taskReward * 0.02;
        referral.totalEarn += referralReward;
        await referral.save();
      }

      return { code: 200, values: `Task completed and rewards distributed successfully.` };
    } catch (error) {
      logger.error(
        `Error while adding completed task to user: ${(error as Error).message}`
      );
      return { code: 500, values: `Error while processing request: ${error}` };
    }
  }

  public async getUserImagesById(id: string) {
    try {
      let user = await User.findByPk(id);

      if (!user) {
        user = await User.findOne({ where: { telegramId: id } });
      }

      if (!user) {
        return { code: 404, values: `User with ID or Telegram ID ${id} not found.` };
      }

      const tasks = await UserImage.findAll({
        where: { userId: user.id },
      });

      return { code: 200, values: tasks };
    } catch (error) {
      logger.error(
        `Error while fetching user images by ID or Telegram ID: ${(error as Error).message}`
      );
      return { code: 500, values: `Error while processing request: ${error}` };
    }
  }

  public async getUserTreeProgressById(id: string) {
    try {
      let user = await User.findByPk(id);

      if (!user) {
        user = await User.findOne({ where: { telegramId: id } });
      }

      if (!user) {
        return { code: 404, values: `User with ID or Telegram ID ${id} not found.` };
      }

      const skillProgress = await UserSkillProgress.findAll({
        where: { userId: user.id },
      });

      return { code: 200, values: skillProgress };
    } catch (error) {
      logger.error(
        `Error while fetching user tree progress by ID or Telegram ID: ` +
        `${(error as Error).message}`
      );
      return { code: 500, values: `Error while processing request: ${error}` };
    }
  }

  public async addTreeSkillToUser(skillId: number, userId: number) {
    try {
      const user = await User.findByPk(userId);
      if (!user) {
        return { code: 404, values: `User with ID ${userId} not found.` };
      }

      const skill: SkillWithBranch | null = await Skill.findByPk(skillId, {
        include: {
          model: SkillBranch,
          as: 'branch',
        }
      });

      if (!skill) {
        return { code: 404, values: `Skill with ID ${skillId} not found.` };
      }

      const existingProgress = await UserSkillProgress.findOne({
        where: { userId, skillId }
      });
      if (existingProgress) {
        return { code: 400, values: `Skill already purchased.` };
      }

      if (user.exp < skill.expCost) {
        return { code: 400, values: `Not enough experience to purchase this skill.` };
      }

      const previousSkillProgress = await UserSkillProgress.findAll({
        where: { userId },
        include: {
          model: Skill,
          as: 'skill',
          where: { skillBranchId: skill.skillBranchId },
        }
      });

      const maxSkill = previousSkillProgress.length;
      if (maxSkill + 1 !== skill.id) {
        return { code: 400, values: `You need to buy the previous skills in order.` };
      }

      await UserSkillProgress.create({ userId, skillId });

      user.exp -= skill.expCost;
      await user.save();

      const userSkills = await UserSkill.findOne({ where: { userId } });
      if (!userSkills) {
        return { code: 500, values: `Error: user skills not found.` };
      }

      const skillBranchName = skill.branch?.name;

      if (skillBranchName === "Might of Tap") {
        userSkills.tapStrength = skill.value;
      } else if (skillBranchName === "Endless Vigor") {
        userSkills.dailyTaps = skill.value;
      } else if (skillBranchName === "Fortune Seeker") {
        userSkills.luck = skill.value;
      } else if (skillBranchName === "Collector’s Vault") {
        userSkills.portfolioSize = skill.value;
      } else if (skillBranchName === "Clockwork Touch") {
        userSkills.autoTapInterval = skill.value;
      }

      await userSkills.save();

      return { code: 200, values: `Skill purchased and user updated successfully.` };
    } catch (error) {
      logger.error(
        `Error while adding skill to user: ` +
        `${(error as Error).message}`
      );
      return { code: 500, values: `Error while processing request: ${error}` };
    }
  }
}
