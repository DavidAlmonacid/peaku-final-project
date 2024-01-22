import { pool } from "../utils/dbConnection.js";

export class ProductsModel {
  static async getAll() {
    try {
      const { rows: products } = await pool.query("SELECT * FROM products;");

      return { success: true, data: products };
    } catch (error) {
      return { error: true, message: error.message };
    }
  }
}
