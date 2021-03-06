import { prismaClient } from '../prismaClient'

class CreateContatoService {
  async execute(nome: string, email: string, telefone: string, imagem: string) {
    try {
      const Contato = await prismaClient.contatos.create({
        data: {
          nome: nome,
          email: email,
          telefone: telefone,
          imagem: imagem,
        },
      })

      return Contato
    } catch (error) {
      console.error(error)
    }
  }
}

export { CreateContatoService }
