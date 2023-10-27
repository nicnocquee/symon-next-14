-- CreateIndex
CREATE INDEX "organization_member.user_id_index" ON "organization_member"("user_id");

-- CreateIndex
CREATE INDEX "organization_member.organization_id_index" ON "organization_member"("organization_id");

-- CreateIndex
CREATE INDEX "project.organization_id_index" ON "project"("organization_id");

-- CreateIndex
CREATE INDEX "report_request.probe_id_organization_id_project_id_index" ON "report_request"("probe_id", "organization_id", "project_id");

-- AddForeignKey
ALTER TABLE "organization" ADD FOREIGN KEY ("owner") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "project" ADD FOREIGN KEY ("owner") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;
