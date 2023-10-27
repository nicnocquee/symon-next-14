-- CreateTable
CREATE TABLE "hourly_response_time" (
    "id" TEXT NOT NULL,
    "probe_id" TEXT NOT NULL,
    "monika_id" TEXT NOT NULL,
    "year" INTEGER NOT NULL,
    "month" INTEGER NOT NULL,
    "date" INTEGER NOT NULL,
    "hour" INTEGER NOT NULL,
    "response_time" INTEGER NOT NULL,
    "count" INTEGER NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "daily_response_time" (
    "id" TEXT NOT NULL,
    "probe_id" TEXT NOT NULL,
    "monika_id" TEXT NOT NULL,
    "year" INTEGER NOT NULL,
    "month" INTEGER NOT NULL,
    "date" INTEGER NOT NULL,
    "response_time" INTEGER NOT NULL,
    "count" INTEGER NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "weekly_response_time" (
    "id" TEXT NOT NULL,
    "probe_id" TEXT NOT NULL,
    "monika_id" TEXT NOT NULL,
    "year" INTEGER NOT NULL,
    "month" INTEGER NOT NULL,
    "week" INTEGER NOT NULL,
    "response_time" INTEGER NOT NULL,
    "count" INTEGER NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "monthly_response_time" (
    "id" TEXT NOT NULL,
    "probe_id" TEXT NOT NULL,
    "monika_id" TEXT NOT NULL,
    "year" INTEGER NOT NULL,
    "month" INTEGER NOT NULL,
    "response_time" INTEGER NOT NULL,
    "count" INTEGER NOT NULL,

    PRIMARY KEY ("id")
);
