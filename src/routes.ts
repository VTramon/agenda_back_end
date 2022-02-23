import { Router } from 'express'
import { CreateContatoController } from './Controllers/CreateContatoController'
import { DeleteContatoController } from './Controllers/DeleteContatoController'
import { GetContatoController } from './Controllers/GetContatoController'

const router = Router()

router.post('/create', new CreateContatoController().handle)
router.delete('/delete', new DeleteContatoController().handle)
router.get('/get', new GetContatoController().handle)

export { router }
