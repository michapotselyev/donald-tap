import { DataTypes, Model, Optional } from 'sequelize';
import sequelize from 'src/database';

interface UserReferralAttributes {
  id: number;
  referrerId: number;      // Пользователь, который пригласил реферала
  referredUserId: number;  // Реферал
  totalEarn: number;
  createdAt?: Date;
  updatedAt?: Date;
}

interface UserReferralCreationAttributes extends Optional<UserReferralAttributes, 'id'> {}

export class UserReferral extends Model
<
  UserReferralAttributes,
  UserReferralCreationAttributes
> implements UserReferralAttributes {
  public id!: number;
  public referrerId!: number;
  public referredUserId!: number;
  public totalEarn!: number;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

UserReferral.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    referrerId: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      references: {
        model: 'users',
        key: 'id',
      },
      onDelete: 'CASCADE',
    },
    referredUserId: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      references: {
        model: 'users',
        key: 'id',
      },
      onDelete: 'CASCADE',
    },
    totalEarn: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
    },
  },
  {
    sequelize,
    tableName: 'user_referrals',
    timestamps: true,
    indexes: [
      {
        unique: true,
        fields: ['referrerId', 'referredUserId'],
      },
    ],
  }
);
