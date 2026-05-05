import jwt from "jsonwebtoken";

export default function generateToken(payload:any){

    const secretKey:any = process.env.JWT_SECRET;

    const token = jwt.sign(
        payload,
        secretKey,
        { expiresIn: "1h" }
    );

    return token;
}