import UserService from "./user.service.js";

const userService = new UserService();

//el usuario tiene que estar authenticado para poder utilizar esto
async function currentUser(req:any, res:any) {
    // Lógica para iniciar sesión
    const id = req.user.id; // Suponiendo que el email del usuario autenticado está disponible en req.user
    const user = await userService.getCurrentUser(id);
    res.status(200).json(user);
}

export {
    currentUser
}