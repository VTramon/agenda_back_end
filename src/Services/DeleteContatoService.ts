import { prismaClient } from '../prismaClient'

class DeleteContatoService {
  async execute(id: string) {
    const Contato = await prismaClient.contatos.delete({
      where: {
        id: id,
      },
    })
  }
}

export { DeleteContatoService }
