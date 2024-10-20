import { DataTypes, Model, Optional } from 'sequelize';
import sequelize from 'src/database';

interface SkillBranchAttributes {
  id: number;
  skillTreeId: number;
  name: string;
  createdAt?: Date;
  updatedAt?: Date;
}

interface SkillBranchCreationAttributes extends Optional<SkillBranchAttributes, 'id'> {}

export class SkillBranch extends Model
<
  SkillBranchAttributes,
  SkillBranchCreationAttributes
> implements SkillBranchAttributes {
  public id!: number;
  public skillTreeId!: number;
  public name!: string;

  // timestamps
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
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
    references: {
      model: 'skill_trees',
      key: 'id',
    },
    onDelete: 'CASCADE',
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  sequelize,
  tableName: 'skill_branches',
  timestamps: true,
});
