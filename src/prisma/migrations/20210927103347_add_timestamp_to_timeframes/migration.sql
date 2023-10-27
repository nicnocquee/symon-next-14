/*
  Warnings:

  - Added the required column `updated_at` to the `daily_response_time` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updated_at` to the `hourly_response_time` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updated_at` to the `monthly_response_time` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updated_at` to the `weekly_response_time` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "daily_response_time" ADD COLUMN     "created_at" TIMESTAMPTZ(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updated_at" TIMESTAMPTZ(3) NOT NULL;

-- AlterTable
ALTER TABLE "hourly_response_time" ADD COLUMN     "created_at" TIMESTAMPTZ(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updated_at" TIMESTAMPTZ(3) NOT NULL;

-- AlterTable
ALTER TABLE "monthly_response_time" ADD COLUMN     "created_at" TIMESTAMPTZ(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updated_at" TIMESTAMPTZ(3) NOT NULL;

-- AlterTable
ALTER TABLE "weekly_response_time" ADD COLUMN     "created_at" TIMESTAMPTZ(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updated_at" TIMESTAMPTZ(3) NOT NULL;
