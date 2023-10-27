/*
  Warnings:

  - You are about to drop the column `organization_id` on the `api_key` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "api_key.organization_id_index";

-- AlterTable
ALTER TABLE "api_key" DROP COLUMN "organization_id";
