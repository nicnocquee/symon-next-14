/*
  Warnings:

  - You are about to drop the column `monika_instance_id` on the `daily_summary` table. All the data in the column will be lost.
  - You are about to drop the column `monika_instance_id` on the `hourly_summary` table. All the data in the column will be lost.
  - You are about to drop the column `instance_id` on the `monika` table. All the data in the column will be lost.
  - You are about to drop the column `monika_instance_id` on the `monthly_summary` table. All the data in the column will be lost.
  - You are about to drop the column `monika_instance_id` on the `report` table. All the data in the column will be lost.
  - You are about to drop the column `monika_instance_id` on the `weekly_summary` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "daily_summary" DROP COLUMN "monika_instance_id";

-- AlterTable
ALTER TABLE "hourly_summary" DROP COLUMN "monika_instance_id";

-- AlterTable
ALTER TABLE "monika" DROP COLUMN "instance_id";

-- AlterTable
ALTER TABLE "monthly_summary" DROP COLUMN "monika_instance_id";

-- AlterTable
ALTER TABLE "report" DROP COLUMN "monika_instance_id";

-- AlterTable
ALTER TABLE "weekly_summary" DROP COLUMN "monika_instance_id";
