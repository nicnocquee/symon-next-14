/*
  Warnings:

  - You are about to drop the `daily_summary` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `hourly_summary` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `monthly_summary` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `weekly_summary` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "daily_summary" DROP CONSTRAINT "daily_summary_probe_id_fkey";

-- DropForeignKey
ALTER TABLE "hourly_summary" DROP CONSTRAINT "hourly_summary_probe_id_fkey";

-- DropForeignKey
ALTER TABLE "monthly_summary" DROP CONSTRAINT "monthly_summary_probe_id_fkey";

-- DropForeignKey
ALTER TABLE "weekly_summary" DROP CONSTRAINT "weekly_summary_probe_id_fkey";

-- DropTable
DROP TABLE "daily_summary";

-- DropTable
DROP TABLE "hourly_summary";

-- DropTable
DROP TABLE "monthly_summary";

-- DropTable
DROP TABLE "weekly_summary";

-- CreateTable
CREATE TABLE "time_summary" (
    "id" TEXT NOT NULL,
    "probe_id" TEXT NOT NULL,
    "monika_id" TEXT NOT NULL,
    "year" INTEGER NOT NULL,
    "month" INTEGER NOT NULL,
    "date" INTEGER NOT NULL,
    "week" INTEGER NOT NULL,
    "weekYear" INTEGER NOT NULL,
    "hour" INTEGER NOT NULL,
    "total_response_time" INTEGER NOT NULL,
    "count" INTEGER NOT NULL,
    "incident_count" INTEGER NOT NULL,
    "total_downtime_in_second" INTEGER NOT NULL,
    "created_at" TIMESTAMPTZ(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ(3) NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "time_summary.probe_id_monika_id_index" ON "time_summary"("probe_id", "monika_id");
