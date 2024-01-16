import bcrypt from 'bcrypt';
import { validateUser } from '../schemas/user.js';

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

    return res.send(validationResult);
  };
}
