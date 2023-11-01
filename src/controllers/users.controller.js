import { pool } from "../database.js";

const userController = {};

userController.createUser = async (req, res) => {
    try {
        const { nombre, edad } = req.body;
        const result = await pool.query(`INSERT INTO usuarios (id, nombre, edad) 
            VALUES (NULL,?,?)`,
            [nombre, edad]);
        res.json({ "message": "Guardado con éxito" });
    } catch (error) {
        console.error(error);
        res.status(500).json({"message": "Error al guardar en la base de datos"});
    }
}

userController.getUsers = async (req, res) => {
    try {
        const [ result ] = await pool.query("SELECT id, nombre, edad FROM usuarios");
        res.json(result);
    } catch (error) {
        console.error(error);
        res.status(500).json({"message": "Error al consultar la base de datos"});
    }
}

userController.updateUser = async (req, res) => {
    try {
        const { id } = req.params;
        const { nombre, edad } = req.body;
        const result = await pool.query(`UPDATE usuarios 
            SET nombre=?, edad=? WHERE id=${id}`, 
            [nombre, edad]);
        res.json(result);
    } catch (error) {
        console.error(error);
        res.status(500).json({"message": "Error al actualizar el usuario en la base de datos"});
    }
}

userController.deleteUser = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await pool.query(`DELETE FROM usuarios WHERE id=${id}`);
        res.json(result);
    } catch (error) {
        console.error(error);
        res.status(500).json({"message": "Error al borrar usuario de la base de datos"});
    }
}

export { userController };
