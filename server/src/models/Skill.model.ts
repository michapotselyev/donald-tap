import { DataTypes, Model, Optional } from 'sequelize';
import sequelize from 'src/database';

interface SkillAttributes {
  id: number;
  skillBranchId: number;
  name: string;
  description: string;
  expCost: number;
  effect: string;
  value: number;
  defaultImageUrl: string;
  activeImageUrl: string;
  createdAt?: Date;
  updatedAt?: Date;
}

interface SkillCreationAttributes extends Optional<SkillAttributes, 'id'> {}

export class Skill extends Model
<
  SkillAttributes,
  SkillCreationAttributes
> implements SkillAttributes {
  public id!: number;
  public skillBranchId!: number;
  public name!: string;
  public description!: string;
  public expCost!: number;
  public effect!: string;
  public value!: number;
  public defaultImageUrl!: string;
  public activeImageUrl!: string;

  // timestamps
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
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
    references: {
      model: 'skill_branches',
      key: 'id',
    },
    onDelete: 'CASCADE',
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
  value: {
    type: DataTypes.INTEGER.UNSIGNED,
    allowNull: false,
  },
  defaultImageUrl: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  activeImageUrl: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  sequelize,
  tableName: 'skills',
  timestamps: true,
  indexes: [
    {
      fields: ['skillBranchId'],
    },
  ],
});
