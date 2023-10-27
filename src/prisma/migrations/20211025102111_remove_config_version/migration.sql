/*
  Warnings:

  - You are about to drop the column `config_version` on the `report` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "report" DROP COLUMN "config_version";
