import { DataTypes, Model, Optional } from 'sequelize';
import sequelize from 'src/database';

/**
 * Interface representing User attributes.
 * @interface
 */
interface UserAttributes {
  id: number;
  telegramId: string;
  firstName: string;
  lastName?: string;
  username?: string;
  avatarUrl?: string;
  exp: number;
  level: number;
  levelPoints: number;
  token?: string;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * Interface representing attributes for creating a new User.
 * This omits the 'id' field since it will be auto-generated.
 * @interface
 */
interface UserCreationAttributes extends Optional<UserAttributes, 'id'> {}

/**
 * Class representing a User model.
 * @class User
 * @extends {Model<UserAttributes>}
 * @implements {UserAttributes}
 */
export class User extends Model<
  UserAttributes,
  UserCreationAttributes
> implements UserAttributes {
  public id!: number;
  public telegramId!: string;
  public firstName!: string;
  public lastName?: string;
  public username?: string;
  public avatarUrl?: string;
  public exp!: number;
  public level!: number;
  public levelPoints!: number;
  public token?: string;

  // timestamps
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

/**
 * Initializes the User model.
 */
User.init(
  {
    /**
     * User ID.
     * @type {number}
     */
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    /**
     * Telegram user ID.
     * @type {string}
     */
    telegramId: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    /**
     * First name of the user.
     * @type {string}
     */
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    /**
     * Last name of the user.
     * @type {string}
     */
    lastName: {
      type: DataTypes.STRING,
    },
    /**
     * Username of the user in Telegram.
     * @type {string}
     */
    username: {
      type: DataTypes.STRING,
    },
    /**
     * Avatar URL of the user.
     * @type {string}
     */
    avatarUrl: {
      type: DataTypes.STRING,
    },
    /**
     * Experience points (EXP) of the user.
     * @type {number}
     */
    exp: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
    },
    /**
     * Current level of the user.
     * @type {number}
     */
    level: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
    },
    /**
     * Current points in the user's level progression.
     * @type {number}
     */
    levelPoints: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
    },
    token: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    sequelize,
    tableName: 'users',
    timestamps: true,
  }
);
