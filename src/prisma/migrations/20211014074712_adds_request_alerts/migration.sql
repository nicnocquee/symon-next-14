/*
  Warnings:

  - You are about to drop the `_request_alert` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `alert` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_request_alert" DROP CONSTRAINT "_request_alert_A_fkey";

-- DropForeignKey
ALTER TABLE "_request_alert" DROP CONSTRAINT "_request_alert_B_fkey";

-- DropTable
DROP TABLE "_request_alert";

-- DropTable
DROP TABLE "alert";

-- CreateTable
CREATE TABLE "request_alert" (
    "id" TEXT NOT NULL,
    "query" TEXT NOT NULL,
    "message" TEXT,
    "request_id" TEXT NOT NULL,
    "created_at" TIMESTAMPTZ(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ(3) NOT NULL,

    PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "request_alert" ADD FOREIGN KEY ("request_id") REFERENCES "request"("id") ON DELETE CASCADE ON UPDATE CASCADE;
