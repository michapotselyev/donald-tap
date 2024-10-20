import { DataTypes, Model, Optional } from 'sequelize';
import sequelize from 'src/database';

interface TaskAttributes {
  id: number;
  name: string;
  description: string;
  expReward: number;
  createdAt?: Date;
  updatedAt?: Date;
}

interface TaskCreationAttributes extends Optional<TaskAttributes, 'id'> {}

export class Task extends Model
<
  TaskAttributes,
  TaskCreationAttributes
> implements TaskAttributes {
  public id!: number;
  public name!: string;
  public description!: string;
  public expReward!: number;

  // timestamps
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

Task.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    expReward: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: 'tasks',
    timestamps: true,
  }
);
