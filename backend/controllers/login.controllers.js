import { pool } from "../db.js";

export const login = async (req, res) => {
  const { email, password } = req.body;
  const [result] = await pool.query("SELECT * FROM user WHERE email = ?", [
    email,
  ]);
  if (result.length === 0) {
    return res.status(404).json({ message: "Usuario o contraseña inválida" });
  } else if (result.length === 1) {
    //console.log(result[0]);
    const hash = result[0].passwordHash;

    if (hash === password) {
      return res.sendStatus(200);
    } else {
      return res.status(404).json({ message: "Usuario o contraseña inválida" });
    }
    //const match = await bcrypt.compare(password, hash);
  }
};
