import { prismaClient } from '../prismaClient'

class UpdateContatoService {
  async execute(
    id: string,
    nome?: string,
    telefone?: string,
    email?: string,
    imagem?: string
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
    } catch (error: any) {
      return error.message
    }
  }
}

export { UpdateContatoService }
