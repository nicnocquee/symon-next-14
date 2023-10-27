/*
  Warnings:

  - The values [USER] on the enum `RoleScope` will be removed. If these variants are still used in the database, this will fail.
  - You are about to drop the column `created_by` on the `organization` table. All the data in the column will be lost.
  - You are about to drop the column `updated_by` on the `organization` table. All the data in the column will be lost.
  - You are about to drop the column `created_by` on the `project` table. All the data in the column will be lost.
  - You are about to drop the column `updated_by` on the `project` table. All the data in the column will be lost.
  - You are about to drop the column `role` on the `user` table. All the data in the column will be lost.
  - You are about to drop the `apiKey` table. If the table is not empty, all the data it contains will be lost.
  - Changed the type of `role` on the `access_control` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Added the required column `owner` to the `organization` table without a default value. This is not possible if the table is not empty.
  - Added the required column `owner` to the `project` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "Role" AS ENUM ('ADMIN', 'MANAGER', 'MEMBER');

-- AlterEnum
BEGIN;
CREATE TYPE "RoleScope_new" AS ENUM ('ORGANIZATION', 'PROJECT', 'API_KEY');
ALTER TABLE "access_control" ALTER COLUMN "scope" TYPE "RoleScope_new" USING ("scope"::text::"RoleScope_new");
ALTER TYPE "RoleScope" RENAME TO "RoleScope_old";
ALTER TYPE "RoleScope_new" RENAME TO "RoleScope";
DROP TYPE "RoleScope_old";
COMMIT;

-- DropForeignKey
ALTER TABLE "apiKey" DROP CONSTRAINT "apiKey_project_id_fkey";

-- AlterTable
ALTER TABLE "access_control" DROP COLUMN "role",
ADD COLUMN     "role" "Role" NOT NULL;

-- AlterTable
ALTER TABLE "organization" DROP COLUMN "created_by",
DROP COLUMN "updated_by",
ADD COLUMN     "owner" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "project" DROP COLUMN "created_by",
DROP COLUMN "updated_by",
ADD COLUMN     "owner" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "user" DROP COLUMN "role";

-- DropTable
DROP TABLE "apiKey";

-- DropEnum
DROP TYPE "UserRole";

-- CreateTable
CREATE TABLE "api_key" (
    "id" UUID NOT NULL,
    "name" TEXT NOT NULL,
    "owner" TEXT NOT NULL,
    "apiKey" TEXT NOT NULL,
    "isEnabled" BOOLEAN NOT NULL DEFAULT true,
    "organization_id" TEXT NOT NULL,
    "created_at" TIMESTAMPTZ(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ(3) NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "organization_member" (
    "id" TEXT NOT NULL,
    "role" "Role" NOT NULL,
    "user_id" TEXT NOT NULL,
    "organization_id" TEXT NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "api_key.apiKey_unique" ON "api_key"("apiKey");
