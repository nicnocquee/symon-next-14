-- DropForeignKey
ALTER TABLE "status_page" DROP CONSTRAINT "status_page_probe_id_fkey";

-- AddForeignKey
ALTER TABLE "status_page" ADD CONSTRAINT "status_page_probe_id_fkey" FOREIGN KEY ("probe_id") REFERENCES "probe"("id") ON DELETE CASCADE ON UPDATE CASCADE;
