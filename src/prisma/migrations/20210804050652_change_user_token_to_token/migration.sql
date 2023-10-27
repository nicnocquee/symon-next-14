/*
  Warnings:

  - You are about to drop the `reset_token` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "reset_token";

-- CreateTable
CREATE TABLE "token" (
    "id" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "token" TEXT NOT NULL,
    "expiration" TIMESTAMP(3) NOT NULL,
    "used" INTEGER NOT NULL DEFAULT 0,
    "created_at" TIMESTAMPTZ(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ(3) NOT NULL,

    PRIMARY KEY ("id")
);
