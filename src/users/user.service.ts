import { User } from "./users.js";

export default class UserService {
    async createUser(userData: { name: string; email: string; password: string; role: string }) {

        //codigo para elminar error
        const user = new User(userData);
        await user.save();
        return user;
    }

    async getCurrentUser(userId: string) {
        const user = await User.findById(userId);
        return user;
    }
}