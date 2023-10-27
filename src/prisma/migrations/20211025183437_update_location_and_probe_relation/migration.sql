/*
  Warnings:

  - You are about to drop the column `locationProbeId` on the `location` table. All the data in the column will be lost.
  - The primary key for the `location_probe` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `location_probe` table. All the data in the column will be lost.
  - You are about to drop the column `locationProbeId` on the `probe` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "location" DROP CONSTRAINT "location_locationProbeId_fkey";

-- DropForeignKey
ALTER TABLE "probe" DROP CONSTRAINT "probe_locationProbeId_fkey";

-- AlterTable
ALTER TABLE "location" DROP COLUMN "locationProbeId";

-- AlterTable
ALTER TABLE "location_probe" DROP CONSTRAINT "location_probe_pkey",
DROP COLUMN "id",
ADD PRIMARY KEY ("probe_id", "location_id");

-- AlterTable
ALTER TABLE "probe" DROP COLUMN "locationProbeId";

-- AddForeignKey
ALTER TABLE "location_probe" ADD FOREIGN KEY ("location_id") REFERENCES "location"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "location_probe" ADD FOREIGN KEY ("probe_id") REFERENCES "probe"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
