import { Router } from 'express'
import { CreateContatoController } from './Controllers/CreateContatoController'

const router = Router()

router.post('/create', new CreateContatoController().handle)

export { router }
