-- CreateTable
CREATE TABLE "event" (
    "id" TEXT NOT NULL,
    "monikaId" TEXT NOT NULL,
    "alertId" TEXT NOT NULL,
    "event" TEXT NOT NULL,
    "created_at" TIMESTAMPTZ(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ(3) NOT NULL,

    PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "event" ADD FOREIGN KEY ("monikaId") REFERENCES "monika"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "event" ADD FOREIGN KEY ("alertId") REFERENCES "request_alert"("id") ON DELETE CASCADE ON UPDATE CASCADE;
