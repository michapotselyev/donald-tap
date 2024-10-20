import { AccountLevel } from "./AccountLevel.model";
import { Image } from "./Image.model";
import { Skill } from "./Skill.model";
import { SkillBranch } from "./SkillBranch.model";
import { SkillTree } from "./SkillTree.model";
import { Task } from "./Task.model";
import { User } from "./User.model";
import { UserImage } from "./UserImage.model";
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
  UserSkill
};

User.hasMany(UserSkillProgress, { foreignKey: 'userId', onDelete: 'CASCADE' });
UserSkillProgress.belongsTo(User, { foreignKey: 'userId', onDelete: 'CASCADE' });

Skill.hasMany(UserSkillProgress, { foreignKey: 'skillId', onDelete: 'CASCADE' });
UserSkillProgress.belongsTo(Skill, { foreignKey: 'skillId', onDelete: 'CASCADE' });

SkillTree.hasMany(SkillBranch, { foreignKey: 'skillTreeId', onDelete: 'CASCADE' });
SkillBranch.belongsTo(SkillTree, { foreignKey: 'skillTreeId' });

SkillBranch.hasMany(Skill, { foreignKey: 'skillBranchId', onDelete: 'CASCADE' });
Skill.belongsTo(SkillBranch, { foreignKey: 'skillBranchId' });

User.hasMany(UserTask, { foreignKey: 'userId', onDelete: 'CASCADE', as: 'tasks' });
UserTask.belongsTo(User, { foreignKey: 'userId', onDelete: 'CASCADE' });

Task.hasMany(UserTask, { foreignKey: 'taskId', onDelete: 'CASCADE', as: 'users' });
UserTask.belongsTo(Task, { foreignKey: 'taskId', onDelete: 'CASCADE' });

User.hasMany(UserImage, { foreignKey: 'userId', onDelete: 'CASCADE', as: 'images' });
UserImage.belongsTo(User, { foreignKey: 'userId', onDelete: 'CASCADE' });

Image.hasMany(UserImage, { foreignKey: 'imageId', onDelete: 'CASCADE', as: 'users' });
UserImage.belongsTo(Image, { foreignKey: 'imageId', onDelete: 'CASCADE' });

User.hasMany(UserSkill, { foreignKey: 'userId', onDelete: 'CASCADE', as: 'skills' });
UserSkill.belongsTo(User, { foreignKey: 'userId', onDelete: 'CASCADE' });
