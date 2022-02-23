import { Request, Response } from 'express'
import { GetContatoService } from '../Services/GetContatoService'

class GetContatoController {
  async handle(req: Request, res: Response) {
    try {
      const service = new GetContatoService().execute
      const result = await service()
      console.log(result)

      return res.json(result)
    } catch (error) {
      res.json(error.message)
    }
  }
}

export { GetContatoController }
