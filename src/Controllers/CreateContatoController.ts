import { Request, Response } from 'express'
import { CreateContatoService } from '../Services/CreateContatoService'

class CreateContatoController {
  async handle(req: Request, res: Response) {
    const { nome, email, telefone, imagem } = req.body

    const service = new CreateContatoService().execute

    const result = service(nome, email, telefone, imagem)

    return result
  }
}

export { CreateContatoController }
