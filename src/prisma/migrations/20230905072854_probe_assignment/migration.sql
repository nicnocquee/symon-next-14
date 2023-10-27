-- CreateTable
CREATE TABLE "probe_assignment" (
    "id" TEXT NOT NULL,
    "probe_id" TEXT NOT NULL,
    "monika_id" TEXT NOT NULL,
    "location_id" TEXT NOT NULL,
    "created_at" TIMESTAMPTZ(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ(3) NOT NULL,

    CONSTRAINT "probe_assignment_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "probe_assignment_monika_id_location_id_probe_id_key" ON "probe_assignment"("monika_id", "location_id", "probe_id");

-- AddForeignKey
ALTER TABLE "probe_assignment" ADD CONSTRAINT "probe_assignment_probe_id_fkey" FOREIGN KEY ("probe_id") REFERENCES "probe"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "probe_assignment" ADD CONSTRAINT "probe_assignment_monika_id_fkey" FOREIGN KEY ("monika_id") REFERENCES "monika"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "probe_assignment" ADD CONSTRAINT "probe_assignment_location_id_fkey" FOREIGN KEY ("location_id") REFERENCES "location"("id") ON DELETE CASCADE ON UPDATE CASCADE;
