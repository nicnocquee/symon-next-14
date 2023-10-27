/*
  Warnings:

  - You are about to drop the column `created_ip` on the `apiKey` table. All the data in the column will be lost.
  - You are about to drop the column `updated_ip` on the `apiKey` table. All the data in the column will be lost.
  - You are about to drop the column `created_ip` on the `organization` table. All the data in the column will be lost.
  - You are about to drop the column `updated_ip` on the `organization` table. All the data in the column will be lost.
  - Added the required column `created_by` to the `project` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updated_by` to the `project` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "apiKey" DROP COLUMN "created_ip",
DROP COLUMN "updated_ip";

-- AlterTable
ALTER TABLE "monika" ALTER COLUMN "created_at" SET DATA TYPE TIMESTAMPTZ(3),
ALTER COLUMN "updated_at" SET DATA TYPE TIMESTAMPTZ(3);

-- AlterTable
ALTER TABLE "organization" DROP COLUMN "created_ip",
DROP COLUMN "updated_ip";

-- AlterTable
ALTER TABLE "project" ADD COLUMN     "created_by" TEXT NOT NULL,
ADD COLUMN     "updated_by" TEXT NOT NULL,
ALTER COLUMN "created_at" SET DATA TYPE TIMESTAMPTZ(3),
ALTER COLUMN "updated_at" SET DATA TYPE TIMESTAMPTZ(3);

-- AlterTable
ALTER TABLE "report_notification" ALTER COLUMN "created_at" SET DATA TYPE TIMESTAMPTZ(3),
ALTER COLUMN "updated_at" SET DATA TYPE TIMESTAMPTZ(3);

-- AlterTable
ALTER TABLE "report_request" ALTER COLUMN "created_at" SET DATA TYPE TIMESTAMPTZ(3),
ALTER COLUMN "updated_at" SET DATA TYPE TIMESTAMPTZ(3);

-- AlterTable
ALTER TABLE "report_request_alert" ALTER COLUMN "created_at" SET DATA TYPE TIMESTAMPTZ(3),
ALTER COLUMN "updated_at" SET DATA TYPE TIMESTAMPTZ(3);

-- AlterTable
ALTER TABLE "reset_token" ALTER COLUMN "created_at" SET DATA TYPE TIMESTAMPTZ(3),
ALTER COLUMN "updated_at" SET DATA TYPE TIMESTAMPTZ(3);

-- AlterTable
ALTER TABLE "user" ALTER COLUMN "created_at" SET DATA TYPE TIMESTAMPTZ(3),
ALTER COLUMN "updated_at" SET DATA TYPE TIMESTAMPTZ(3);
