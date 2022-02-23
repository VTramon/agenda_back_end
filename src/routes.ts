import { Router } from 'express'
import { CreateContatoController } from './Controllers/CreateContatoController'
import { DeleteContatoController } from './Controllers/DeleteContatoController'

const router = Router()

router.post('/create', new CreateContatoController().handle)
router.delete('/delete', new DeleteContatoController().handle)

export { router }
