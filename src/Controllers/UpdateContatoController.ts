import { Request, Response } from 'express'
import { UpdateContatoService } from '../Services/UpdateContatoService'

class UpdateContatoController {
  async handle(req: Request, res: Response) {
    try {
      const { id, nome, telefone, email, imagem } = req.body

      const service = new UpdateContatoService().execute

      const result = await service(id, nome, telefone, email, imagem)

      return res.json(`o contato de id ${result.id} foi atualzado`)
    } catch (error) {
      res.json(error.message)
    }
  }
}

export { UpdateContatoController }
