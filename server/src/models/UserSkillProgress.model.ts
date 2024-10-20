import { DataTypes, Model, Optional } from 'sequelize';
import sequelize from 'src/database';

interface UserSkillProgressAttributes {
  id: number;
  userId: number;
  skillId: number;
  createdAt?: Date;
  updatedAt?: Date;
}

interface UserSkillProgressCreationAttributes
extends Optional<UserSkillProgressAttributes, 'id'> {};

export class UserSkillProgress extends Model
<
  UserSkillProgressAttributes,
  UserSkillProgressCreationAttributes
> implements UserSkillProgressAttributes  {
  public id!: number;
  public userId!: number;
  public skillId!: number;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
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
    references: {
      model: 'users',
      key: 'id',
    },
    onDelete: 'CASCADE',
  },
  skillId: {
    type: DataTypes.INTEGER.UNSIGNED,
    allowNull: false,
    references: {
      model: 'skills',
      key: 'id',
    },
    onDelete: 'CASCADE',
  },
}, {
  sequelize,
  tableName: 'user_skill_progress',
  timestamps: true,
  indexes: [
    {
      fields: ['userId', 'skillId'],
    },
  ],
});
