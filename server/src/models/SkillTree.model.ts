import { DataTypes, Model } from 'sequelize';
import sequelize from 'src/database';
import { SkillBranch } from './SkillBranch.model';

export class SkillTree extends Model {
  public id!: number;
  public name!: string;
}

SkillTree.init({
  id: {
    type: DataTypes.INTEGER.UNSIGNED,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  sequelize,
  tableName: 'skill_trees',
});
