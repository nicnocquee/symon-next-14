/*
  Warnings:

  - Added the required column `monika_instance_id` to the `daily_response_time` table without a default value. This is not possible if the table is not empty.
  - Added the required column `monika_instance_id` to the `hourly_response_time` table without a default value. This is not possible if the table is not empty.
  - Added the required column `monika_instance_id` to the `monthly_response_time` table without a default value. This is not possible if the table is not empty.
  - Added the required column `monika_instance_id` to the `weekly_response_time` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "daily_response_time" ADD COLUMN     "monika_instance_id" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "hourly_response_time" ADD COLUMN     "monika_instance_id" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "monthly_response_time" ADD COLUMN     "monika_instance_id" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "weekly_response_time" ADD COLUMN     "monika_instance_id" TEXT NOT NULL;
