import { prismaClient } from '../prismaClient'

class DeleteContatoService {
  async execute(id: string) {
    try {
      const Contato = await prismaClient.contatos.delete({
        where: {
          id: id,
        },
      })
      return Contato
    } catch (error) {
      console.log(error)
    }
  }
}

export { DeleteContatoService }
