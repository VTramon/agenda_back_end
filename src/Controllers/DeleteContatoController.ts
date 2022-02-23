import { Request, Response } from 'express'
import { DeleteContatoService } from '../Services/DeleteContatoService'

class DeleteContatoController {
  async handle(req: Request, res: Response) {
    const { id } = req.body

    const service = new DeleteContatoService().execute

    const result = service(id)

    return result
  }
}

export { DeleteContatoController }
