import { DataTypes, Model, Optional } from 'sequelize';
import sequelize from 'src/database';

interface AccountLevelAttributes {
  id: number;
  level: number;
  minExp: number;
  maxExp: number;
  bonus: number;
  createdAt?: Date;
  updatedAt?: Date;
}

interface AccountLevelCreationAttributes extends Optional<AccountLevelAttributes, 'id'> {}

export class AccountLevel extends Model
<
  AccountLevelAttributes,
  AccountLevelCreationAttributes
> implements AccountLevelAttributes {
  public id!: number;
  public level!: number;
  public minExp!: number;
  public maxExp!: number;
  public bonus!: number;

  // timestamps
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

AccountLevel.init({
  id: {
    type: DataTypes.INTEGER.UNSIGNED,
    autoIncrement: true,
    primaryKey: true,
  },
  level: {
    type: DataTypes.INTEGER.UNSIGNED,
    allowNull: false,
  },
  minExp: {
    type: DataTypes.INTEGER.UNSIGNED,
    allowNull: false,
  },
  maxExp: {
    type: DataTypes.INTEGER.UNSIGNED,
    allowNull: false,
  },
  bonus: {
    type: DataTypes.INTEGER.UNSIGNED,
    allowNull: true,
  },
}, {
  sequelize,
  tableName: 'account_levels',
});
