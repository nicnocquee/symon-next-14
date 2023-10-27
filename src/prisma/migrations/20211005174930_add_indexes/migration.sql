-- CreateIndex
CREATE INDEX "api_key.organization_id_index" ON "api_key"("organization_id");

-- CreateIndex
CREATE INDEX "organization.owner_index" ON "organization"("owner");

-- CreateIndex
CREATE INDEX "probe.project_id_index" ON "probe"("project_id");

-- CreateIndex
CREATE INDEX "project.owner_index" ON "project"("owner");

-- CreateIndex
CREATE INDEX "report_notification.probe_id_index" ON "report_notification"("probe_id");

-- AddForeignKey
ALTER TABLE "api_key" ADD FOREIGN KEY ("owner") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;
