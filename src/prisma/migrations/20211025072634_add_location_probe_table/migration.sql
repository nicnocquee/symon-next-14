/*
  Warnings:

  - You are about to drop the `_location_probe` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_location_probe" DROP CONSTRAINT "_location_probe_A_fkey";

-- DropForeignKey
ALTER TABLE "_location_probe" DROP CONSTRAINT "_location_probe_B_fkey";

-- AlterTable
ALTER TABLE "location" ADD COLUMN     "locationProbeId" TEXT;

-- AlterTable
ALTER TABLE "probe" ADD COLUMN     "locationProbeId" TEXT;

-- DropTable
DROP TABLE "_location_probe";

-- CreateTable
CREATE TABLE "location_probe" (
    "id" TEXT NOT NULL,
    "probe_id" TEXT NOT NULL,
    "location_id" TEXT NOT NULL,

    PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "location" ADD FOREIGN KEY ("locationProbeId") REFERENCES "location_probe"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "probe" ADD FOREIGN KEY ("locationProbeId") REFERENCES "location_probe"("id") ON DELETE CASCADE ON UPDATE CASCADE;
