import { DataTypes, Model, Optional } from 'sequelize';
import sequelize from 'src/database';

interface UserImageAttributes {
  id: number;
  userId: number;
  imageId: number;
  createdAt?: Date;
  updatedAt?: Date;
}

interface UserImageCreationAttributes extends Optional<UserImageAttributes, 'id'> {}

export class UserImage extends Model
<
  UserImageAttributes,
  UserImageCreationAttributes
> implements UserImageAttributes {
  public id!: number;
  public userId!: number;
  public imageId!: number;

  // timestamps
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

UserImage.init(
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
    imageId: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      references: {
        model: 'images',
        key: 'id',
      },
      onDelete: 'CASCADE',
    },
  },
  {
    sequelize,
    tableName: 'user_images',
    timestamps: true,
    indexes: [
      {
        unique: true,
        fields: ['userId', 'imageId'],
      },
    ],
  }
);