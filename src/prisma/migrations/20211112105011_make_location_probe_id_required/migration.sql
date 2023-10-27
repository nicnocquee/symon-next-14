/*
  Warnings:

  - Made the column `id` on table `location_probe` required. This step will fail if there are existing NULL values in that column.

*/

UPDATE "location_probe" SET "id" = md5(random()::text || clock_timestamp()::text)::uuid;

-- AlterTable
ALTER TABLE "location_probe" ALTER COLUMN "id" SET NOT NULL;
