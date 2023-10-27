-- CreateTable
CREATE TABLE "config_interval" (
    "id" TEXT NOT NULL,
    "interval_seconds" INTEGER NOT NULL,
    "is_default" BOOLEAN NOT NULL,
    "created_at" TIMESTAMPTZ(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ(3) NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "config_interval.interval_seconds_unique" ON "config_interval"("interval_seconds");
