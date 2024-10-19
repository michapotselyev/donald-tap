import { Skill } from "./Skill.model";
import { SkillBranch } from "./SkillBranch.model";
import { SkillTree } from "./SkillTree.model";
import { User } from "./User.model";
import { UserSkillProgress } from "./UserSkillProgress.model";

export {
  User,
  UserSkillProgress,
  SkillTree,
  SkillBranch,
  Skill
};

User.hasMany(UserSkillProgress, { foreignKey: 'userId', onDelete: 'CASCADE' });
UserSkillProgress.belongsTo(User, { foreignKey: 'userId', onDelete: 'CASCADE' });

Skill.hasMany(UserSkillProgress, { foreignKey: 'skillId', onDelete: 'CASCADE' });
UserSkillProgress.belongsTo(Skill, { foreignKey: 'skillId', onDelete: 'CASCADE' });

SkillTree.hasMany(SkillBranch, { foreignKey: 'skillTreeId', onDelete: 'CASCADE' });
SkillBranch.belongsTo(SkillTree, { foreignKey: 'skillTreeId' });

SkillBranch.hasMany(Skill, { foreignKey: 'skillBranchId', onDelete: 'CASCADE' });
Skill.belongsTo(SkillBranch, { foreignKey: 'skillBranchId' });
