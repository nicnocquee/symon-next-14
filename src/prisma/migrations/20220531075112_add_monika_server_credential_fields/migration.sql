-- AlterTable
ALTER TABLE "monika" ADD COLUMN     "port" INTEGER DEFAULT 22,
ADD COLUMN     "server_status" TEXT DEFAULT E'installing',
ADD COLUMN     "username" TEXT DEFAULT E'root';

-- RenameIndex
ALTER INDEX "api_key.apiKey_unique" RENAME TO "api_key_apiKey_key";

-- RenameIndex
ALTER INDEX "config_interval.interval_seconds_unique" RENAME TO "config_interval_interval_seconds_key";

-- RenameIndex
ALTER INDEX "location_probe.location_id_index" RENAME TO "location_probe_location_id_idx";

-- RenameIndex
ALTER INDEX "location_probe.probe_id_index" RENAME TO "location_probe_probe_id_idx";

-- RenameIndex
ALTER INDEX "operator.email_unique" RENAME TO "operator_email_key";

-- RenameIndex
ALTER INDEX "organization.nano_id_index" RENAME TO "organization_nano_id_idx";

-- RenameIndex
ALTER INDEX "organization.owner_index" RENAME TO "organization_owner_idx";

-- RenameIndex
ALTER INDEX "organization_member.organization_id_index" RENAME TO "organization_member_organization_id_idx";

-- RenameIndex
ALTER INDEX "organization_member.user_id_index" RENAME TO "organization_member_user_id_idx";

-- RenameIndex
ALTER INDEX "probe.nano_id_index" RENAME TO "probe_nano_id_idx";

-- RenameIndex
ALTER INDEX "probe.project_id_index" RENAME TO "probe_project_id_idx";

-- RenameIndex
ALTER INDEX "project.nano_id_index" RENAME TO "project_nano_id_idx";

-- RenameIndex
ALTER INDEX "project.organization_id_index" RENAME TO "project_organization_id_idx";

-- RenameIndex
ALTER INDEX "project.owner_index" RENAME TO "project_owner_idx";

-- RenameIndex
ALTER INDEX "report_notification.probe_id_index" RENAME TO "report_notification_probe_id_idx";

-- RenameIndex
ALTER INDEX "report_request.probe_id_index" RENAME TO "report_request_probe_id_idx";

-- RenameIndex
ALTER INDEX "status_page.probe_id_unique" RENAME TO "status_page_probe_id_key";

-- RenameIndex
ALTER INDEX "status_page.unique_key_index" RENAME TO "status_page_unique_key_idx";

-- RenameIndex
ALTER INDEX "time_summary.probe_id_monika_id_index" RENAME TO "time_summary_probe_id_monika_id_idx";

-- RenameIndex
ALTER INDEX "tls_status.url_index" RENAME TO "tls_status_url_idx";

-- RenameIndex
ALTER INDEX "user.email_unique" RENAME TO "user_email_key";
