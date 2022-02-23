import { Request, Response } from 'express'
import { CreateContatoService } from '../Services/CreateContatoService'

class CreateContatoController {
  async handle(req: Request, res: Response) {
    try {
      const { nome, email, telefone, imagem } = req.body

      const service = new CreateContatoService().execute

      const result = await service(nome, email, telefone, imagem)

      return res.json('contato criado com sucesso')
    } catch (error) {
      res.json(error.message)
    }
  }
}

export { CreateContatoController }
