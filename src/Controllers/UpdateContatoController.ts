import { Request, Response } from 'express'
import { UpdateContatoService } from '../Services/UpdateContatoService'

class UpdateContatoController {
  async handle(req: Request, res: Response) {
    try {
      const { nome, email, telefone, imagem, id } = req.body

      const service = new UpdateContatoService().execute

      const result = await service(nome, email, telefone, imagem, id)

      return res.json(`o contato de id ${result.id} foi atualzado`)
    } catch (error) {
      res.json(error.message)
    }
  }
}

export { UpdateContatoController }
