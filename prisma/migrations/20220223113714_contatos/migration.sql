-- CreateTable
CREATE TABLE "Contatos" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "telefone" VARCHAR(11) NOT NULL,
    "imagem" TEXT NOT NULL,

    CONSTRAINT "Contatos_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Contatos_email_key" ON "Contatos"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Contatos_telefone_key" ON "Contatos"("telefone");
