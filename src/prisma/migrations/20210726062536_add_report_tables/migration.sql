-- CreateTable
CREATE TABLE "report" (
    "id" TEXT NOT NULL,
    "monika_id" TEXT NOT NULL,
    "config_version" TEXT NOT NULL,
    "monika_instance_id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "report_request" (
    "id" TEXT NOT NULL,
    "report_id" TEXT NOT NULL,
    "timestamp" INTEGER NOT NULL,
    "probe_id" TEXT NOT NULL,
    "probe_name" TEXT,
    "request_method" TEXT NOT NULL,
    "request_url" TEXT NOT NULL,
    "request_header" TEXT,
    "request_body" TEXT,
    "response_status" INTEGER NOT NULL,
    "response_header" TEXT,
    "response_body" TEXT,
    "response_time" INTEGER NOT NULL,
    "response_size" INTEGER,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "report_request_alert" (
    "id" TEXT NOT NULL,
    "report_request_id" TEXT NOT NULL,
    "alert" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "report_notification" (
    "id" TEXT NOT NULL,
    "report_id" TEXT NOT NULL,
    "timestamp" INTEGER NOT NULL,
    "probe_id" TEXT NOT NULL,
    "probe_name" TEXT,
    "alert" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "notification_id" TEXT NOT NULL,
    "channel" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "report" ADD FOREIGN KEY ("monika_id") REFERENCES "monika"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "report_request" ADD FOREIGN KEY ("report_id") REFERENCES "report"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "report_request_alert" ADD FOREIGN KEY ("report_request_id") REFERENCES "report_request"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "report_notification" ADD FOREIGN KEY ("report_id") REFERENCES "report"("id") ON DELETE CASCADE ON UPDATE CASCADE;
