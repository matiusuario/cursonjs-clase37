import Express from "express";
import { router } from "./routes/users.routes.js";

const PORT = 4000;

export const usuarios = [{
    id: 1,
    nombre: "Juan Pérez",
    edad: 40
},
{
    id: 2,
    nombre: "María Dominguez",
    edad: 30
},
{
    id: 3,
    nombre: "Pablo Martinez",
    edad: 35
},
{
    id: 4,
    nombre: "Estela García",
    edad: 55
}]

const app = Express();

app.use(Express.json());

app.use(router);

app.listen(PORT, () => console.log(`Servidor corriendo en ${PORT}`));
