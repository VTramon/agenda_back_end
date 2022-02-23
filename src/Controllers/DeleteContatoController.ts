import { Request, Response } from 'express'
import { DeleteContatoService } from '../Services/DeleteContatoService'

class DeleteContatoController {
  async handle(req: Request, res: Response) {
    try {
      const { id } = req.body

      const service = new DeleteContatoService().execute

      const result = await service(id)

      return res.json(`contato de id ${result.id} deletado com sucesso`)
    } catch (error) {
      res.json(error.message)
    }
  }
}

export { DeleteContatoController }
