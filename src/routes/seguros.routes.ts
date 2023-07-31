import { Router } from 'express'
import * as segurosController from '../controllers/seguro.controller'

const router = Router()

router.get('/', segurosController.getSegurosController)

export default router
