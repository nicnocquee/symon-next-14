/*
  Warnings:

  - You are about to drop the `daily_response_time` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `hourly_response_time` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `monthly_response_time` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `weekly_response_time` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "daily_response_time" DROP CONSTRAINT "daily_response_time_probe_id_fkey";

-- DropForeignKey
ALTER TABLE "hourly_response_time" DROP CONSTRAINT "hourly_response_time_probe_id_fkey";

-- DropForeignKey
ALTER TABLE "monthly_response_time" DROP CONSTRAINT "monthly_response_time_probe_id_fkey";

-- DropForeignKey
ALTER TABLE "weekly_response_time" DROP CONSTRAINT "weekly_response_time_probe_id_fkey";

-- DropTable
DROP TABLE "daily_response_time";

-- DropTable
DROP TABLE "hourly_response_time";

-- DropTable
DROP TABLE "monthly_response_time";

-- DropTable
DROP TABLE "weekly_response_time";

-- CreateTable
CREATE TABLE "hourly_summary" (
    "id" TEXT NOT NULL,
    "probe_id" TEXT NOT NULL,
    "monika_id" TEXT NOT NULL,
    "monika_instance_id" TEXT NOT NULL,
    "year" INTEGER NOT NULL,
    "month" INTEGER NOT NULL,
    "date" INTEGER NOT NULL,
    "hour" INTEGER NOT NULL,
    "total_response_time" INTEGER NOT NULL,
    "count" INTEGER NOT NULL,
    "incident_count" INTEGER NOT NULL,
    "total_downtime_in_second" INTEGER NOT NULL,
    "created_at" TIMESTAMPTZ(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ(3) NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "daily_summary" (
    "id" TEXT NOT NULL,
    "probe_id" TEXT NOT NULL,
    "monika_id" TEXT NOT NULL,
    "monika_instance_id" TEXT NOT NULL,
    "year" INTEGER NOT NULL,
    "month" INTEGER NOT NULL,
    "date" INTEGER NOT NULL,
    "total_response_time" INTEGER NOT NULL,
    "count" INTEGER NOT NULL,
    "incident_count" INTEGER NOT NULL,
    "total_downtime_in_second" INTEGER NOT NULL,
    "created_at" TIMESTAMPTZ(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ(3) NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "weekly_summary" (
    "id" TEXT NOT NULL,
    "probe_id" TEXT NOT NULL,
    "monika_id" TEXT NOT NULL,
    "monika_instance_id" TEXT NOT NULL,
    "year" INTEGER NOT NULL,
    "month" INTEGER NOT NULL,
    "week" INTEGER NOT NULL,
    "total_response_time" INTEGER NOT NULL,
    "count" INTEGER NOT NULL,
    "incident_count" INTEGER NOT NULL,
    "total_downtime_in_second" INTEGER NOT NULL,
    "created_at" TIMESTAMPTZ(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ(3) NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "monthly_summary" (
    "id" TEXT NOT NULL,
    "probe_id" TEXT NOT NULL,
    "monika_id" TEXT NOT NULL,
    "monika_instance_id" TEXT NOT NULL,
    "year" INTEGER NOT NULL,
    "month" INTEGER NOT NULL,
    "total_response_time" INTEGER NOT NULL,
    "count" INTEGER NOT NULL,
    "incident_count" INTEGER NOT NULL,
    "total_downtime_in_second" INTEGER NOT NULL,
    "created_at" TIMESTAMPTZ(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ(3) NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "hourly_summary.probe_id_year_month_date_hour_index" ON "hourly_summary"("probe_id", "year", "month", "date", "hour");

-- CreateIndex
CREATE INDEX "daily_summary.probe_id_year_month_date_index" ON "daily_summary"("probe_id", "year", "month", "date");

-- CreateIndex
CREATE INDEX "weekly_summary.probe_id_year_month_week_index" ON "weekly_summary"("probe_id", "year", "month", "week");

-- CreateIndex
CREATE INDEX "monthly_summary.probe_id_year_month_index" ON "monthly_summary"("probe_id", "year", "month");

-- AddForeignKey
ALTER TABLE "hourly_summary" ADD FOREIGN KEY ("probe_id") REFERENCES "probe"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "daily_summary" ADD FOREIGN KEY ("probe_id") REFERENCES "probe"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "weekly_summary" ADD FOREIGN KEY ("probe_id") REFERENCES "probe"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "monthly_summary" ADD FOREIGN KEY ("probe_id") REFERENCES "probe"("id") ON DELETE CASCADE ON UPDATE CASCADE;
