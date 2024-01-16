export class UserController {
  static createUser = async (req, res) => {
    const { body } = req;
    console.log(body);
    return res.json({ body });
  };
}
