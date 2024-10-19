import { DataTypes, Model } from 'sequelize';
import sequelize from 'src/database';
import { Skill } from './Skill.model';

export class SkillBranch extends Model {
  public id!: number;
  public skillTreeId!: number;
  public name!: string;
}

SkillBranch.init({
  id: {
    type: DataTypes.INTEGER.UNSIGNED,
    autoIncrement: true,
    primaryKey: true,
  },
  skillTreeId: {
    type: DataTypes.INTEGER.UNSIGNED,
    allowNull: false,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  sequelize,
  tableName: 'skill_branches',
});
