import bcrypt from "bcrypt";
import UserService from "../users/user.service.js";
import { User } from "../users/users.js";
import generateToken from "./jwt.js";
export class AuthService {
    async register(name, email, password, role) {
        if (!email || !password) {
            throw new Error("Email y contraseña son requeridos");
        }
        const passwordHash = await bcrypt.hash(password, 10);
        const userService = new UserService();
        const user = await userService.createUser({ name, email, password: passwordHash, role: role || "user" });
        return user;
    }
    async login(email, password) {
        if (!email || !password) {
            throw new Error("Email y contraseña son requeridos");
        }
        const user = await User.findOne({ email: email });
        if (!user) {
            throw new Error("Usuario no encontrado");
        }
        const comparePassword = await bcrypt.compare(password, user.password);
        if (!comparePassword) {
            throw new Error("Contraseña incorrecta");
        }
        const token = generateToken({
            id: user._id,
            email: user.email,
            role: user.role
        });
        return {
            accessToken: token,
            user: user
        };
    }
}
