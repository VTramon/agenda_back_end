import { prismaClient } from '../prismaClient'

class UpdateContatoService {
  async execute(
    nome: string,
    email: string,
    telefone: string,
    imagem: string,
    id: string
  ) {
    try {
      const Contato = await prismaClient.contatos.update({
        where: {
          id: id,
        },
        data: {
          email: email,
          nome: nome,
          imagem: imagem,
          telefone: telefone,
        },
      })

      return Contato
    } catch (error) {
      console.log(error)
    }
  }
}

export { UpdateContatoService }
