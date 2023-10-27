-- CreateTable
CREATE TABLE "probe" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "project_id" TEXT NOT NULL,
    "created_at" TIMESTAMPTZ(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ(3) NOT NULL,

    PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "probe" ADD FOREIGN KEY ("project_id") REFERENCES "project"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- clean up
DELETE FROM "report_request";

-- DropIndex
DROP INDEX "report_request.probe_id_organization_id_project_id_index";

-- CreateIndex
CREATE INDEX "report_request.probe_id_index" ON "report_request"("probe_id");

-- AlterTable
ALTER TABLE "report_request" 
  DROP COLUMN "organization_id",
  DROP COLUMN "probe_name",
  DROP COLUMN "project_id",
  ADD FOREIGN KEY ("probe_id") REFERENCES "probe"("id") ON DELETE CASCADE ON UPDATE CASCADE;
