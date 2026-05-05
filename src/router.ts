import express from 'express'; 
import { login, register } from './auth/auth.controller.js';
import { currentUser } from './users/user.controller.js';
import { authMiddleware } from './middlewares/auth.middleware.js';
import { adminMiddleware } from './middlewares/admin.middleware.js';

const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.get('/user', authMiddleware, currentUser);

// Parte 5: Ruta protegida usando 'any' para evitar conflictos de compilación en Windows
router.get('/administrador', authMiddleware, adminMiddleware, (req: any, res: any) => {
    res.send("Administrador");
});

export default router;