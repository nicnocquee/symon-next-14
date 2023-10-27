-- AlterTable
ALTER TABLE "monika" ADD COLUMN     "api_key_id" UUID;

-- AddForeignKey
ALTER TABLE "monika" ADD CONSTRAINT "monika_api_key_id_fkey" FOREIGN KEY ("api_key_id") REFERENCES "api_key"("id") ON DELETE CASCADE ON UPDATE CASCADE;
