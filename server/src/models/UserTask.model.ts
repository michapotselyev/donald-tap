import { DataTypes, Model, Optional } from 'sequelize';
import sequelize from 'src/database';

interface UserTaskAttributes {
  id: number;
  userId: number;
  taskId: number;
  isCompleted: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}

interface UserTaskCreationAttributes extends Optional<UserTaskAttributes, 'id'> {}

export class UserTask extends Model
<
  UserTaskAttributes,
  UserTaskCreationAttributes
> implements UserTaskAttributes {
  public id!: number;
  public userId!: number;
  public taskId!: number;
  public isCompleted!: boolean;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

UserTask.init(
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
    taskId: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      references: {
        model: 'tasks',
        key: 'id',
      },
      onDelete: 'CASCADE',
    },
    isCompleted: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
  },
  {
    sequelize,
    tableName: 'user_tasks',
    timestamps: true,
    indexes: [
      {
        unique: true,
        fields: ['userId', 'taskId'],
      },
    ],
  }
);
