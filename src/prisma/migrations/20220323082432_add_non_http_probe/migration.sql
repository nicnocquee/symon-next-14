-- CreateEnum
CREATE TYPE "RequestProtocol" AS ENUM ('http', 'tcp');

-- AlterTable
ALTER TABLE "request" ADD COLUMN     "ipAddress" INET DEFAULT E'0.0.0.0',
ADD COLUMN     "port" INTEGER DEFAULT 0,
ADD COLUMN     "protocol" "RequestProtocol" DEFAULT E'http';
