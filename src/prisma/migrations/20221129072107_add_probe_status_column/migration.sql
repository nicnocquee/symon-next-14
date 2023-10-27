-- CreateEnum
CREATE TYPE "ProbeStatus" AS ENUM ('idle', 'healthy', 'incident');

-- AlterTable
ALTER TABLE "probe" ADD COLUMN     "status" "ProbeStatus" DEFAULT 'idle';
