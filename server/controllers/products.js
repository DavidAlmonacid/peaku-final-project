import { ProductsModel } from "../models/product.js";

export class ProductsController {
  static async getAll(req, res) {
    const dbData = await ProductsModel.getAll();

    if (dbData.error) {
      return res.status(500).json(dbData);
    }

    return res.status(200).json(dbData);
  }
}
