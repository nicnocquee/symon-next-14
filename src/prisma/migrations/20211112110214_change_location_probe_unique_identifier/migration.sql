/*
  Warnings:

  - The primary key for the `location_probe` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- AlterTable
ALTER TABLE "location_probe" DROP CONSTRAINT "location_probe_pkey",
ADD PRIMARY KEY ("id");
