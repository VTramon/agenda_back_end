import { prismaClient } from '../prismaClient'

class GetContatoService {
  async execute() {
    try {
      const Contato = await prismaClient.contatos.findMany()
      return Contato
    } catch (error) {
      console.log(error)
    }
  }
}

export { GetContatoService }
