-- CreateTable
CREATE TABLE "Guild" (
    "id_" SERIAL NOT NULL,
    "id" TEXT NOT NULL,
    "prayersChannelId" TEXT,
    "prayersMessageId" TEXT,

    CONSTRAINT "Guild_pkey" PRIMARY KEY ("id_")
);

-- CreateTable
CREATE TABLE "User" (
    "id_" SERIAL NOT NULL,
    "id" TEXT NOT NULL,
    "name" TEXT,
    "locationId" INTEGER,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id_")
);

-- CreateTable
CREATE TABLE "Location" (
    "id" SERIAL NOT NULL,
    "country" TEXT NOT NULL,
    "city" TEXT NOT NULL,

    CONSTRAINT "Location_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Guild_id_key" ON "Guild"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Guild_prayersChannelId_key" ON "Guild"("prayersChannelId");

-- CreateIndex
CREATE UNIQUE INDEX "Guild_prayersMessageId_key" ON "Guild"("prayersMessageId");

-- CreateIndex
CREATE UNIQUE INDEX "User_id_key" ON "User"("id");

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_locationId_fkey" FOREIGN KEY ("locationId") REFERENCES "Location"("id") ON DELETE SET NULL ON UPDATE CASCADE;
