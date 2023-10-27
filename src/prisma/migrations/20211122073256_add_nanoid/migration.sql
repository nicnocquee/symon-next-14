-- AlterTable
ALTER TABLE "organization" ADD COLUMN     "nano_id" TEXT;

-- AlterTable
ALTER TABLE "probe" ADD COLUMN     "nano_id" TEXT;

-- AlterTable
ALTER TABLE "project" ADD COLUMN     "nano_id" TEXT;

-- CreateIndex
CREATE INDEX "organization.nano_id_index" ON "organization"("nano_id");

-- CreateIndex
CREATE INDEX "probe.nano_id_index" ON "probe"("nano_id");

-- CreateIndex
CREATE INDEX "project.nano_id_index" ON "project"("nano_id");
