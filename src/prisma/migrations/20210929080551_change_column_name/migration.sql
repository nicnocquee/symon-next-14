/*
  Warnings:

  - You are about to drop the column `response_time` on the `daily_response_time` table. All the data in the column will be lost.
  - You are about to drop the column `response_time` on the `hourly_response_time` table. All the data in the column will be lost.
  - You are about to drop the column `response_time` on the `monthly_response_time` table. All the data in the column will be lost.
  - You are about to drop the column `response_time` on the `weekly_response_time` table. All the data in the column will be lost.
  - Added the required column `total_response_time` to the `daily_response_time` table without a default value. This is not possible if the table is not empty.
  - Added the required column `total_response_time` to the `hourly_response_time` table without a default value. This is not possible if the table is not empty.
  - Added the required column `total_response_time` to the `monthly_response_time` table without a default value. This is not possible if the table is not empty.
  - Added the required column `total_response_time` to the `weekly_response_time` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "daily_response_time" DROP COLUMN "response_time",
ADD COLUMN     "total_response_time" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "hourly_response_time" DROP COLUMN "response_time",
ADD COLUMN     "total_response_time" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "monthly_response_time" DROP COLUMN "response_time",
ADD COLUMN     "total_response_time" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "weekly_response_time" DROP COLUMN "response_time",
ADD COLUMN     "total_response_time" INTEGER NOT NULL;
