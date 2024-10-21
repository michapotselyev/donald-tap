import { DataTypes, Model, Optional } from 'sequelize';
import sequelize from 'src/database';

interface MatrixAttributes {
  id: number;
  user: number;
  currentRow: number | null;
  currentCol: number | null;
  progress: number;
  matrixFilePath: string;
  imageOverlayPath: string;
  createdAt?: Date;
  updatedAt?: Date;
}

interface MatrixCreationAttributes extends Optional<MatrixAttributes, 'id'> {}

export class Matrix extends Model
<
  MatrixAttributes,
  MatrixCreationAttributes
> implements MatrixAttributes {
  public id!: number;
  public user!: number;
  public currentRow!: number | null;
  public currentCol!: number | null;
  public progress!: number;
  public matrixFilePath!: string;
  public imageOverlayPath!: string;

  // timestamps
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

Matrix.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    user: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      references: {
        model: 'users',
        key: 'id',
      },
      onDelete: 'CASCADE',
    },
    currentRow: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true,
      defaultValue: null
    },
    currentCol: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true,
      defaultValue: null
    },
    progress: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 0
    },
    matrixFilePath: {
      type: DataTypes.STRING,
      allowNull: false
    },
    imageOverlayPath: {
      type: DataTypes.STRING,
      allowNull: false
    },
  },
  {
    sequelize,
    tableName: 'matrices',
    timestamps: true,
  }
);
