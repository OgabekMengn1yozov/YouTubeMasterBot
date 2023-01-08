import * as dotenv from "dotenv";
dotenv.config();
import { Sequelize, Model, DataTypes } from "sequelize";

const sequelize = new Sequelize(process.env.DB_URL as string, {
  logging: false,
});

class User extends Model {
  declare id: string;
  declare user_id: number;
}

User.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: new DataTypes.UUIDV4(),
      primaryKey: true,
    },
    user_id: {
      type: new DataTypes.BIGINT(),
    },
  },
  {
    tableName: "users",
    sequelize,
  }
);

export default User;
