import { AuthService } from "./auth.service.js";
const authService = new AuthService();
async function register(req, res) {
    const { name, email, password, role } = req.body;
    try {
        const user = await authService.register(name, email, password, role);
        res.status(201).json(user);
    }
    catch (error) {
        res.status(400).json({ error: error.message });
    }
}
async function login(req, res) {
    const { email, password } = req.body;
    try {
        const user = await authService.login(email, password);
        res.status(200).json(user);
    }
    catch (error) {
        res.status(400).json({ error: error.message });
    }
}
export { login, register };
