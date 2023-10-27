-- CreateIndex
CREATE INDEX "daily_response_time.probe_id_year_month_date_index" ON "daily_response_time"("probe_id", "year", "month", "date");

-- CreateIndex
CREATE INDEX "hourly_response_time.probe_id_year_month_date_hour_index" ON "hourly_response_time"("probe_id", "year", "month", "date", "hour");

-- CreateIndex
CREATE INDEX "monthly_response_time.probe_id_year_month_index" ON "monthly_response_time"("probe_id", "year", "month");

-- CreateIndex
CREATE INDEX "weekly_response_time.probe_id_year_month_week_index" ON "weekly_response_time"("probe_id", "year", "month", "week");
