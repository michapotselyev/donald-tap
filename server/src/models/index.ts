import { AccountLevel } from "./AccountLevel.model";
import { Image } from "./Image.model";
import { Skill } from "./Skill.model";
import { SkillBranch } from "./SkillBranch.model";
import { SkillTree } from "./SkillTree.model";
import { Task } from "./Task.model";
import { User } from "./User.model";
import { UserImage } from "./UserImage.model";
import { UserReferral } from "./UserReferral.model";
import { UserSkill } from "./UserSkill.model";
import { UserSkillProgress } from "./UserSkillProgress.model";
import { UserTask } from "./UserTask.model";

export {
  User,
  UserSkillProgress,
  SkillTree,
  SkillBranch,
  Skill,
  AccountLevel,
  Task,
  UserTask,
  Image,
  UserImage,
  UserSkill,
  UserReferral
};

User.hasMany(UserSkillProgress, { foreignKey: 'userId', onDelete: 'CASCADE', as: 'skillProgress' });
UserSkillProgress.belongsTo(User, { foreignKey: 'userId', onDelete: 'CASCADE', as: 'user' });

Skill.hasMany(UserSkillProgress, { foreignKey: 'skillId', onDelete: 'CASCADE', as: 'progresses' });
UserSkillProgress.belongsTo(Skill, { foreignKey: 'skillId', onDelete: 'CASCADE', as: 'skill' });

SkillTree.hasMany(SkillBranch, { foreignKey: 'skillTreeId', onDelete: 'CASCADE', as: 'branches' });
SkillBranch.belongsTo(SkillTree, { foreignKey: 'skillTreeId', onDelete: 'CASCADE', as: 'tree' });

SkillBranch.hasMany(Skill, { foreignKey: 'skillBranchId', onDelete: 'CASCADE', as: 'skills' });
Skill.belongsTo(SkillBranch, { foreignKey: 'skillBranchId', onDelete: 'CASCADE', as: 'branch' });

User.hasMany(UserTask, { foreignKey: 'userId', onDelete: 'CASCADE', as: 'tasks' });
UserTask.belongsTo(User, { foreignKey: 'userId', onDelete: 'CASCADE', as: 'user' });

Task.hasMany(UserTask, { foreignKey: 'taskId', onDelete: 'CASCADE', as: 'users' });
UserTask.belongsTo(Task, { foreignKey: 'taskId', onDelete: 'CASCADE', as: 'task' });

User.hasMany(UserImage, { foreignKey: 'userId', onDelete: 'CASCADE', as: 'images' });
UserImage.belongsTo(User, { foreignKey: 'userId', onDelete: 'CASCADE', as: 'user' });

Image.hasMany(UserImage, { foreignKey: 'imageId', onDelete: 'CASCADE', as: 'users' });
UserImage.belongsTo(Image, { foreignKey: 'imageId', onDelete: 'CASCADE', as: 'image' });

User.hasMany(UserSkill, { foreignKey: 'userId', onDelete: 'CASCADE', as: 'skills' });
UserSkill.belongsTo(User, { foreignKey: 'userId', onDelete: 'CASCADE', as: 'user' });

User.hasMany(UserReferral, { foreignKey: 'referrerId', onDelete: 'CASCADE', as: 'referrals' });
UserReferral.belongsTo(User, { foreignKey: 'referrerId', onDelete: 'CASCADE', as: 'referrer' });
UserReferral.belongsTo(User, { foreignKey: 'referredUserId', onDelete: 'CASCADE', as: 'referredUser' });
