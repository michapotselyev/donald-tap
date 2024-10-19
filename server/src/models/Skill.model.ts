import { DataTypes, Model } from 'sequelize';
import sequelize from 'src/database';
import { UserSkillProgress } from './UserSkillProgress.model';

export class Skill extends Model {
  public id!: number;
  public skillBranchId!: number;
  public name!: string;
  public description!: string;
  public expCost!: number;
  public effect!: string;
}

Skill.init({
  id: {
    type: DataTypes.INTEGER.UNSIGNED,
    autoIncrement: true,
    primaryKey: true,
  },
  skillBranchId: {
    type: DataTypes.INTEGER.UNSIGNED,
    allowNull: false,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  expCost: {
    type: DataTypes.INTEGER.UNSIGNED,
    allowNull: false,
  },
  effect: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  sequelize,
  tableName: 'skills',
});
