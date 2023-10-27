-- CreateTable
CREATE TABLE "notification_log" (
    "id" TEXT NOT NULL,
    "eventId" TEXT NOT NULL,
    "alertId" TEXT NOT NULL,
    "notificationId" TEXT NOT NULL,
    "body" TEXT,
    "created_at" TIMESTAMPTZ(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ(3) NOT NULL,

    CONSTRAINT "notification_log_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "notification_log_eventId_idx" ON "notification_log"("eventId");

-- CreateIndex
CREATE INDEX "notification_log_alertId_idx" ON "notification_log"("alertId");

-- CreateIndex
CREATE INDEX "notification_log_notificationId_idx" ON "notification_log"("notificationId");

-- AddForeignKey
ALTER TABLE "notification_log" ADD CONSTRAINT "notification_log_alertId_fkey" FOREIGN KEY ("alertId") REFERENCES "request_alert"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "notification_log" ADD CONSTRAINT "notification_log_notificationId_fkey" FOREIGN KEY ("notificationId") REFERENCES "notification"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "notification_log" ADD CONSTRAINT "notification_log_eventId_fkey" FOREIGN KEY ("eventId") REFERENCES "event"("id") ON DELETE CASCADE ON UPDATE CASCADE;
