import { DataTypes, Model, Optional } from 'sequelize';
import sequelize from 'src/database';

interface ImageAttributes {
  id: number;
  path: string;
  name: string;
  price: number;
  uniqueness: number;
  createdAt?: Date;
  updatedAt?: Date;
}

interface ImageCreationAttributes extends Optional<ImageAttributes, 'id'> {}

export class Image extends Model
<
  ImageAttributes,
  ImageCreationAttributes
> implements ImageAttributes {
  public id!: number;
  public path!: string;
  public name!: string;
  public price!: number;
  public uniqueness!: number;

  // timestamps
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

Image.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    path: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
    uniqueness: {
      type: DataTypes.DECIMAL(5, 2),
      allowNull: false,
      validate: {
        min: 0,
        max: 100,
      },
    },
  },
  {
    sequelize,
    tableName: 'images',
    timestamps: true,
  }
);
