/*
  Warnings:

  - Added the required column `enabled` to the `user` table without a default value. This is not possible if the table is not empty.
  - Added the required column `suspended` to the `user` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "user" ADD COLUMN     "enabled" INTEGER NOT NULL,
ADD COLUMN     "suspended" INTEGER NOT NULL;
