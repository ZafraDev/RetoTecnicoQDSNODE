import { Router } from 'express';
import * as segurosController from '../controllers/seguro.controller';

const router = Router();

router.get('/', segurosController.getSegurosController);
router.get('/:seguroId/polizas/clientes', segurosController.getSeguroPorIdController);

export default router;
