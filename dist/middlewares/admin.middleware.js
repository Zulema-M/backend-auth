export function adminMiddleware(req, res, next) {
    // 1. Leer req.user y 2. Verificar si el rol es "admin"
    if (req.user && req.user.role === "admin") {
        return next(); // Si es admin, continúa
    }
    // 3. Si NO es admin: responder con 403 Forbidden
    return res.status(403).send("Forbidden");
}
