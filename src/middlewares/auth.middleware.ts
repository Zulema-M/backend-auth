import jwt from "jsonwebtoken"

export function authMiddleware(req:any,res:any,next:any){
    try {
        const secretKey:any = process.env.JWT_SECRET;

        const authHeader = req.headers.authorization;

        if(!authHeader || !authHeader.startsWith("Bearer ")){
            return res.status(401).json({message:"token no proporcionado"});
        }
  
        const token = authHeader.split(" ")[1]
        const decoded:any = jwt.verify(token, secretKey);

        req.user = {
            id:decoded.id,
            email:decoded.email,
            role: decoded.role
        };

        next();

    } catch (error:any) {
        return res.status(401).json({message:"No autorizado"});
    }
}