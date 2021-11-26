import express from 'express';
import carreras from './carreras';
import roles from './roles';
import materias2 from './materias2';
import usuarios from './usuarios';







const router = express.Router();
router.use('/materias2', materias2);
router.use('/usuarios', usuarios);
router.use('/carreras', carreras);
router.use('/roles', roles);

export default router;
