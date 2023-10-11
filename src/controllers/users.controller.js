import { usuarios } from "../index.js";

const userController = {};

userController.createUser = (req, res) => {
    const { nombre, edad } = req.body;
    let newId = 1;
    if (usuarios.length) {
        newId = usuarios[usuarios.length - 1].id + 1;
    }
    const usuario = {id: newId, nombre: nombre, edad: edad };
    usuarios.push(usuario);
    res.send("Guardado con éxito");
}

userController.getUsers = (req, res) => {
    res.json(usuarios);
}

userController.updateUser = (req, res) => {
    const { id } = req.params;
    const { nombre, edad } = req.body;
    let ind;
    let usuario = usuarios.find((item, index) => {
        if (item.id == id) {
            ind = index;
            return true;
        }
    });
    if (usuario) {
        usuario.nombre = nombre;
        usuario.edad = edad;
        usuarios[ind] = usuario;
        res.send("Se actualizó el usuario correctamente");
    } else {
        res.send("No se encontró el usuario");
    }
}

userController.deleteUser = (req, res) => {
    const { id } = req.params;
    let ind = usuarios.findIndex((item) => item.id == id);
    if (ind != -1) {
        let eliminado = usuarios.splice(ind, 1);
        if (eliminado) {
            res.json({"mensaje": "Se eliminó el usuario: ", eliminado});
        } else {
            res.send("No se encontró el usuario");
        }
    } else {
        res.send("No se encontró el usuario");
    }
}

export { userController };
