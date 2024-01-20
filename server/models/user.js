import { pool } from "../utils/dbConnection.js";

export class UserModel {
  static async create({ input }) {
    const { name, last_name: lastName, email, password } = input;

    const uuidResult = await pool.query("SELECT uuid_generate_v4() AS uuid;");
    const uuid = uuidResult.rows[0].uuid;

    try {
      await pool.query(
        "INSERT INTO users (id, name, last_name, email, password) VALUES ($1, $2, $3, $4, $5);",
        [uuid, name, lastName, email, password]
      );
    } catch (error) {
      return { error: true, message: "Error creating user" };
    }

    let userCreated = null;
    try {
      const userResult = await pool.query(
        "SELECT id, name, last_name, email, created_at, updated_at FROM users WHERE id = $1;",
        [uuid]
      );

      userCreated = userResult.rows[0];
    } catch (error) {
      return { error: true, message: "Error getting user" };
    }

    return {
      success: true,
      message: "User created successfully",
      data: {
        id: userCreated.id,
        name: userCreated.name,
        last_name: userCreated.last_name,
        email: userCreated.email,
        created_at: userCreated.created_at,
        updated_at: userCreated.updated_at
      }
    };
  }

  static async getByEmail({ email }) {
    try {
      const userResult = await pool.query(
        "SELECT id, name, last_name, email, password, created_at, updated_at FROM users WHERE email = $1;",
        [email]
      );
      const user = userResult.rows[0];

      if (!user) {
        return { error: true, message: "User not found" };
      }

      return {
        success: true,
        message: "User found",
        data: user
      };
    } catch (error) {
      return { error: true, message: "Error getting user" };
    }
  }
}
