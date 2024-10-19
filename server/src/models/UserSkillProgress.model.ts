import { DataTypes, Model } from 'sequelize';
import sequelize from 'src/database';
import { User } from './User.model';
import { Skill } from './Skill.model';

export class UserSkillProgress extends Model {
  public id!: number;
  public userId!: number;
  public skillId!: number;
}

UserSkillProgress.init({
  id: {
    type: DataTypes.INTEGER.UNSIGNED,
    autoIncrement: true,
    primaryKey: true,
  },
  userId: {
    type: DataTypes.INTEGER.UNSIGNED,
    allowNull: false,
  },
  skillId: {
    type: DataTypes.INTEGER.UNSIGNED,
    allowNull: false,
  },
}, {
  sequelize,
  tableName: 'user_skill_progress',
  indexes: [
    {
      unique: true,
      fields: ['userId', 'skillId'],
    },
  ],
});
