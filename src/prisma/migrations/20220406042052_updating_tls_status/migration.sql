/*
  Warnings:

  - A unique constraint covering the columns `[requestId]` on the table `tls_status` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `probeId` to the `tls_status` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "tls_status" ADD COLUMN     "probeId" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "tls_status.requestId_unique" ON "tls_status"("requestId");
