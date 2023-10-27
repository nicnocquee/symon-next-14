/*
  Warnings:

  - You are about to drop the column `interval` on the `request` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "probe" ADD COLUMN     "interval_seconds" INTEGER;

-- AlterTable
ALTER TABLE "request" DROP COLUMN "interval";

-- RenameIndex
ALTER INDEX "status_page_probe_id_unique" RENAME TO "status_page.probe_id_unique";
