/*
  Warnings:

  - A unique constraint covering the columns `[locationId,alertId,event]` on the table `event` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "event.locationId_alertId_event_unique" ON "event"("locationId", "alertId", "event");
