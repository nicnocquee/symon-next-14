-- DropForeignKey
ALTER TABLE "location_probe" DROP CONSTRAINT "location_probe_location_id_fkey";

-- DropForeignKey
ALTER TABLE "location_probe" DROP CONSTRAINT "location_probe_probe_id_fkey";

-- AddForeignKey
ALTER TABLE "location_probe" ADD FOREIGN KEY ("location_id") REFERENCES "location"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "location_probe" ADD FOREIGN KEY ("probe_id") REFERENCES "probe"("id") ON DELETE CASCADE ON UPDATE CASCADE;
