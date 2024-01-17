import { pool } from "../utils/dbConnection.js";

export class UserModel {
  static create = async ({ input }) => {
    const { name, last_name: lastName, email, password } = input;

    const uuidResult = await pool.query("SELECT uuid_generate_v4() AS uuid;");
    const uuid = uuidResult.rows[0].uuid;

    try {
      await pool.query(
        "INSERT INTO users (id, name, last_name, email, password) VALUES ($1, $2, $3, $4, $5);",
        [uuid, name, lastName, email, password]
      );
    } catch (error) {
      return {
        error: {
          message: "error creating user",
          detail: error.message
        }
      };
    }

    let userCreated = null;
    try {
      const userResult = await pool.query(
        "SELECT id, name, last_name, email, created_at, updated_at FROM users WHERE id = $1;",
        [uuid]
      );

      userCreated = userResult.rows[0];
    } catch (error) {
      return {
        error: {
          message: "error getting user",
          detail: error.message
        }
      };
    }

    return { data: userCreated };
  };
}
