-- DropForeignKey
ALTER TABLE "api_key" DROP CONSTRAINT "api_key_owner_fkey";

-- AddForeignKey
ALTER TABLE "api_key" ADD FOREIGN KEY ("owner") REFERENCES "operator"("id") ON DELETE CASCADE ON UPDATE CASCADE;
