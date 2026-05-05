import { User } from "./users.js";
export default class UserService {
    async createUser(userData) {
        //codigo para elminar error
        const user = new User(userData);
        await user.save();
        return user;
    }
    async getCurrentUser(userId) {
        const user = await User.findById(userId);
        return user;
    }
}
