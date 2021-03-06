import Materia2 from '../models/materia2';

export const index = async (req, res) => {
    const materias2 = await Materia2.findAll({});
    res.json({ data: materias2.map((materia2) => materia2.toJSON()) });
};
export const show = async (req, res) => {
    const materia2 = await Materia2.findByPk(req.params.id);
    if (materia2) {

        res.json({ data: materia2.toJSON() });
    }
    else {
        res
            .status(404)
            .json({ message: `No se encontro la materia con la id ${req.param.id}` });
    }
}
export const create = async (req, res) => {
    try {
        if (req.body.name !== undefined,
            req.body.IdCarrera !== undefined) {
            const materia2 = await Materia2.create({ name: req.body.name, IdCarrera: req.body.IdCarrera });
            res.status(200).send({ id: materia2.id })
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
        if (req.body.name !== undefined &&
            req.body.IdCarrera !== undefined) {
            const materia2 = await Materia2.findByPk(req.params.id);
            materia2.name = req.body.name;
            materia2.IdCarrera = req.body.IdCarrera;
            await materia2.save();
            res.status(200).send({ id: materia2.id })
        }
        else {
            res.status(400).json(`nombre no recibido`);
        }
    }
    catch (err) {
        return res.status(500).send(err);
    }
};