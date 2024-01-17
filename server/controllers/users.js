import bcrypt from "bcrypt";
import { UserModel } from "../models/user.js";
import { validateUser } from "../schemas/user.js";

const saltRounds = 12;

export class UserController {
  static register = async (req, res) => {
    const validationResult = validateUser(req.body);

    if (validationResult.error) {
      const message = validationResult.error.issues[0].message;
      return res.status(400).json({ error: message });
    }

    let data = validationResult.data;

    try {
      const hashedPassword = await bcrypt.hash(data.password, saltRounds);
      data = { ...data, password: hashedPassword };
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }

    const newUser = await UserModel.create({ input: data });

    if (newUser.error) {
      let statusCode = 0;

      if (newUser.error.message === "error creating user") {
        statusCode = 400;
      } else if (newUser.error.message === "error getting user") {
        statusCode = 500;
      }

      return res.status(statusCode).json(newUser.error);
    }

    return res.status(201).json(newUser.data);
  };
}
