/*
  Warnings:

  - A unique constraint covering the columns `[email]` on the table `Contatos` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[telefone]` on the table `Contatos` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Contatos_email_key" ON "Contatos"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Contatos_telefone_key" ON "Contatos"("telefone");
