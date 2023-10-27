/*
  Warnings:

  - A unique constraint covering the columns `[probe_id]` on the table `status_page` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "status_page_probe_id_unique" ON "status_page"("probe_id");

-- AddForeignKey
ALTER TABLE "status_page" ADD FOREIGN KEY ("probe_id") REFERENCES "probe"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
