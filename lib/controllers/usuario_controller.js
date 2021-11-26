
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
        if (
            req.body.name !== undefined &&
            req.body.direccion !== undefined &&
            req.body.dni !== undefined &&
            req.body.pass !== undefined &&
            req.body.telefono !== undefined &&
            req.body.mail !== undefined &&
            req.body.idRol !== undefined
        ) {
            const usuario = await Usuario.create({
                name: req.body.name,
                direccion: req.body.direccion,
                dni: req.body.dni,
                pass: req.body.pass,
                telefono: req.body.telefono,
                mail: req.body.mail,
                idRol: req.body.idRol
            });

            res.status(200).send({ id: usuario.id });
        }
        else {
            if (req.body.name === undefined) {
                res.status(400).json(`nombre no recibido`);
            } else if (req.body.direccion === undefined) {
                res.status(400).json(`direccion no recibido`);
            } else if (req.body.dni === undefined) {
                res.status(400).json(`dni no recibido`);
            } else if (req.body.pass === undefined) {
                res.status(400).json(`password no recibido`);
            } else if (req.body.telefono === undefined) {
                res.status(400).json(`telefono no recibido`);
            } else if (req.body.mail === undefined) {
                res.status(400).json(`email no recibido`);
            } else {
                res.status(400).json(`IdRol no recibido`);
            }
        }
    } catch (err) {
        return res.status(500).send(err);
    }
};
export const update = async (req, res) => {
    try {
        if (req.body.name !== undefined &&
            req.body.direccion !== undefined &&
            req.body.dni !== undefined &&
            req.body.pass !== undefined &&
            req.body.telefono !== undefined &&
            req.body.mail !== undefined &&
            req.body.idRol !== undefined
        ) {
            const usuario = await Usuario.findByPk(req.params.id);
            usuario.name = req.body.name;
            usuario.direccion = req.body.direccion;
            usuario.dni = req.body.dni;
            usuario.pass = req.body.pass;
            usuario.telefono = req.body.telefono;
            usuario.mail = req.body.mail;
            usuario.idRol = req.body.idRol;
            await usuario.save();
            res.status(200).send({ id: usuario.id })
        } else {
            if (req.body.nombre === undefined) {
                res.status(400).json(`nombre no recibido`);
            } else if (req.body.direccion === undefined) {
                res.status(400).json(`direccion no recibido`);
            } else if (req.body.dni === undefined) {
                res.status(400).json(`dni no recibido`);
            } else if (req.body.pass === undefined) {
                res.status(400).json(`password no recibido`);
            } else if (req.body.telefono === undefined) {
                res.status(400).json(`telefono no recibido`);
            } else if (req.body.mail === undefined) {
                res.status(400).json(`email no recibido`);
            } else {
                res.status(400).json(`idRol no recibido`);
            }

        }
    } catch (err) {
        return res.status(500).send(err);
    }
};
