/*
  Warnings:

  - A unique constraint covering the columns `[guildId]` on the table `Server` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[prayersChannelId]` on the table `Server` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[prayersMessageId]` on the table `Server` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Server_guildId_key" ON "Server"("guildId");

-- CreateIndex
CREATE UNIQUE INDEX "Server_prayersChannelId_key" ON "Server"("prayersChannelId");

-- CreateIndex
CREATE UNIQUE INDEX "Server_prayersMessageId_key" ON "Server"("prayersMessageId");
