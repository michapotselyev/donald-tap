import { DataTypes, Model, Optional } from 'sequelize';
import sequelize from 'src/database';

interface SkillTreeAttributes {
  id: number;
  name: string;
  createdAt?: Date;
  updatedAt?: Date;
}

interface SkillTreeCreationAttributes extends Optional<SkillTreeAttributes, 'id'> {}

export class SkillTree extends Model
<
  SkillTreeAttributes,
  SkillTreeCreationAttributes
> implements SkillTreeAttributes {
  public id!: number;
  public name!: string;

  // timestamps
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

SkillTree.init({
  id: {
    type: DataTypes.INTEGER.UNSIGNED,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  sequelize,
  tableName: 'skill_trees',
  timestamps: true,
});
