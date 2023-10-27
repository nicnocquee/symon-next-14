-- CreateTable
CREATE TABLE "_location_probe" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_location_probe_AB_unique" ON "_location_probe"("A", "B");

-- CreateIndex
CREATE INDEX "_location_probe_B_index" ON "_location_probe"("B");

-- AddForeignKey
ALTER TABLE "_location_probe" ADD FOREIGN KEY ("A") REFERENCES "location"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_location_probe" ADD FOREIGN KEY ("B") REFERENCES "probe"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AlterTable
ALTER TABLE "monika" ADD COLUMN     "locationId" TEXT;

-- AddForeignKey
ALTER TABLE "monika" ADD FOREIGN KEY ("locationId") REFERENCES "location"("id") ON DELETE SET NULL ON UPDATE CASCADE;