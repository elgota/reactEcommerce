import { pool } from "../db.js";
import bcrypt from "bcrypt";

export const login = async (req, res) => {
  console.log("llega aqui");
  const { email, password } = req.body;
  const [result] = await pool.query("SELECT * FROM users WHERE email = ?", [
    email,
  ]);

  if (result.affectedRows === 0) {
    return res.status(404).json({ message: "Usuario o contraseña inválida" });
  }

  res.json({
    message: "Inicio de sesión exitoso",
  });
  //const hash = result[0].passwordHash;
  //const match = await bcrypt.compare(password, hash);
  // if (match) {
  //   return res.sendStatus(200).json({
  //     message: "Inicio de sesión exitoso",
  //   });
  // } else {
  //   return res.sendStatus(400).json({
  //     message: "Usuario o contraseña inválida",
  //   });
  // }
};
