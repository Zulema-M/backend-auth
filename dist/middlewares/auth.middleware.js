import jwt from "jsonwebtoken";
export function authMiddleware(req, res, next) {
    try {
        const secretKey = process.env.JWT_SECRET;
        const authHeader = req.headers.authorization;
        if (!authHeader || !authHeader.startsWith("Bearer ")) {
            return res.status(401).json({ message: "token no proporcionado" });
        }
        const token = authHeader.split(" ")[1];
        const decoded = jwt.verify(token, secretKey);
        req.user = {
            id: decoded.id,
            email: decoded.email,
            role: decoded.role
        };
        next();
    }
    catch (error) {
        return res.status(401).json({ message: "No autorizado" });
    }
}
