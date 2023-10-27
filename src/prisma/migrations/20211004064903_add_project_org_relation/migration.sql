-- AddForeignKey
ALTER TABLE "project" ADD FOREIGN KEY ("organization_id") REFERENCES "organization"("id") ON DELETE CASCADE ON UPDATE CASCADE;
