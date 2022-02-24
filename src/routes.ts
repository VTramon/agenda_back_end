import { Router } from 'express'
import { CreateContatoController } from './Controllers/CreateContatoController'
import { DeleteContatoController } from './Controllers/DeleteContatoController'
import { GetContatoController } from './Controllers/GetContatoController'
import { UpdateContatoController } from './Controllers/UpdateContatoController'

const router = Router()

router.post('/create', new CreateContatoController().handle)
router.post('/delete', new DeleteContatoController().handle)
router.get('/get', new GetContatoController().handle)
router.post('/update', new UpdateContatoController().handle)

export { router }
