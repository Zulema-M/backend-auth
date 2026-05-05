import express from "express";
import router from "./router.js";
import dotenv from "dotenv";
import { connectMongoDb } from "./mongo.db.js";
dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json());
app.use("/", router);

async function startApp() {
    try {
        await connectMongoDb()
        console.log('MongoDB conectado')

        app.listen(PORT, ()=>{
            console.log("Servidor funcionando en el puerto",PORT)
        })
    } catch (error) {
        console.error('Error al conectar con MongoDB', error)
        process.exit(1)
    }
}

startApp()