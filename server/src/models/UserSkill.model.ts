import { DataTypes, Model, Optional } from 'sequelize';
import sequelize from 'src/database';

interface UserSkillAttributes {
  id: number;
  userId: number;
  dailyTaps: number;
  autoTapInterval: number;
  luck: number;
  portfolioSize: number;
  tapStrength: number;
  lastTapReset: Date;
  createdAt?: Date;
  updatedAt?: Date;
}

interface UserSkillCreationAttributes extends Optional<UserSkillAttributes, 'id'> {}

export class UserSkill extends Model
<
  UserSkillAttributes,
  UserSkillCreationAttributes
> implements UserSkillAttributes {
  public id!: number;
  public userId!: number;
  public dailyTaps!: number;
  public autoTapInterval!: number;
  public luck!: number;
  public portfolioSize!: number;
  public tapStrength!: number;
  public lastTapReset!: Date;

  // timestamps
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

UserSkill.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    userId: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      references: {
        model: 'users',
        key: 'id',
      },
      onDelete: 'CASCADE',
    },
    dailyTaps: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 10000,
    },
    autoTapInterval: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
    },
    luck: {
      type: DataTypes.DECIMAL(5, 2),
      allowNull: false,
      defaultValue: 0.1,
      validate: {
        min: 0,
        max: 100,
      },
    },
    portfolioSize: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 3,
    },
    tapStrength: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 1,
    },
    lastTapReset: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
  },
  {
    sequelize,
    tableName: 'user_skills',
    timestamps: true,
    indexes: [
      {
        unique: true,
        fields: ['userId'],
      },
    ],
  }
);
