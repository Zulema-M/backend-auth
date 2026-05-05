import jwt from "jsonwebtoken";

export default function generateToken(payload) {
    // Si no encuentra la variable del .env, usa la cadena de texto de la derecha
    const secretKey = process.env.JWT_SECRET || "clave_alternativa_segura_uvg";
    
    const token = jwt.sign(payload, secretKey, { expiresIn: "1h" });
    return token;
}