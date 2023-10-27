/*
  Warnings:

  - You are about to drop the column `ownerId` on the `tls_status` table. All the data in the column will be lost.
  - You are about to drop the column `probeId` on the `tls_status` table. All the data in the column will be lost.
  - You are about to drop the column `requestId` on the `tls_status` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "tls_status" DROP CONSTRAINT "tls_status_ownerId_fkey";

-- DropForeignKey
ALTER TABLE "tls_status" DROP CONSTRAINT "tls_status_probeId_fkey";

-- DropForeignKey
ALTER TABLE "tls_status" DROP CONSTRAINT "tls_status_requestId_fkey";

-- DropIndex
DROP INDEX "tls_status.requestId_index";

-- DropIndex
DROP INDEX "tls_status.requestId_unique";

-- AlterTable
ALTER TABLE "tls_status" DROP COLUMN "ownerId",
DROP COLUMN "probeId",
DROP COLUMN "requestId";

-- CreateIndex
CREATE INDEX "tls_status.url_index" ON "tls_status"("url");
