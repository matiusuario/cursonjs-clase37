import Express from "express";
import { PORT, USER, DATABASE, PASSWORD } from "./configs.js";
import { router } from "./routes/users.routes.js";

const app = Express();

app.use(Express.json());

app.use(router);

app.listen(PORT, () => console.log(`Servidor corriendo en ${PORT}`));
