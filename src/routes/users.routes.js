import { Router } from "express";
import { userController } from "../controllers/users.controller.js";

const router = Router();

router.get("/", (req, res) => {
    res.send("Hola, mundo!");
});

router.get("/usuarios", userController.getUsers);

router.post("/usuarios", userController.createUser);

router.put("/usuario/:id", userController.updateUser);

router.delete("/usuario/:id", userController.deleteUser);

export { router };
