-- AddForeignKey
ALTER TABLE "time_summary" ADD FOREIGN KEY ("probe_id") REFERENCES "probe"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "time_summary" ADD FOREIGN KEY ("monika_id") REFERENCES "monika"("id") ON DELETE CASCADE ON UPDATE CASCADE;
