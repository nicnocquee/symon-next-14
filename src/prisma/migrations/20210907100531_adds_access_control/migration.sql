-- CreateEnum
CREATE TYPE "UserRole" AS ENUM ('ADMIN', 'MANAGER', 'MEMBER');

-- CreateEnum
CREATE TYPE "RoleScope" AS ENUM ('ORGANIZATION', 'PROJECT', 'API_KEY', 'USER');

-- CreateEnum
CREATE TYPE "RoleAction" AS ENUM ('READ_ALL', 'READ_ONE', 'CREATE', 'UPDATE', 'DELETE', 'UPDATE_SELF', 'DELETE_SELF');

-- AlterTable
ALTER TABLE "report_request" ADD COLUMN     "organization_id" TEXT NOT NULL DEFAULT E'',
ADD COLUMN     "project_id" TEXT NOT NULL DEFAULT E'';

-- AlterTable
ALTER TABLE "user" ADD COLUMN     "role" "UserRole" NOT NULL DEFAULT E'MEMBER';

-- CreateTable
CREATE TABLE "access_control" (
    "id" TEXT NOT NULL,
    "role" "UserRole" NOT NULL,
    "scope" "RoleScope" NOT NULL,
    "action" "RoleAction" NOT NULL,
    "created_at" TIMESTAMPTZ(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ(3) NOT NULL,

    PRIMARY KEY ("id")
);
