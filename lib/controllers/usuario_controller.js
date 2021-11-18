
import Usuario from '../models/usuario';

export const index = async (req, res) => {
    console.log("llega");
    const usuarios = await Usuario.findAll({});
    res.json({ data: usuarios.map((usuario) => usuario.toJSON()) });
};
export const show = async (req, res) => {
    const usuario = await Usuario.findByPk(req.params.id);
    if (usuario) {

        res.json({ data: usuario.toJSON() });
    }
    else {
        res
            .status(404)
            .json({ message: `No se encontro el usuario con la id ${req.param.id}` });
    }
}
export const create = async (req, res) => {
    try {
        if (req.body.name !== undefined) {
            const usuario = await Usuario.create({ name: req.body.name, direccion: req.body.direccion, dni: req.body.dni, pass: req.body.pass, telefono: req.body.telefono, mail: req.body.mail, idRol: req.body.idRol });
            res.status(200).send({ id: usuario.id })
        }
        else {
            res.status(400).json(`nombre no recibido`);
        }
    }
    catch (err) {
        return res.status(500).send(err);
    }
};
export const update = async (req, res) => {
    try {
        if (req.body.name !== undefined) {
            const usuario = await Usuario.findByPk(req.params.id);
            usuario.name = req.body.name;
            await usuario.save();
            res.status(200).send({ id: usuario.id })
        }
        else {
            res.status(400).json(`nombre no recibido`);
        }
    }
    catch (err) {
        return res.status(500).send(err);
    }
};
