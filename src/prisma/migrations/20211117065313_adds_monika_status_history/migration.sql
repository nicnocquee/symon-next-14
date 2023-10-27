-- CreateTable
CREATE TABLE "monika_status_history" (
    "id" TEXT NOT NULL,
    "status" BOOLEAN NOT NULL DEFAULT true,
    "monika_id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "monika_status_history" ADD FOREIGN KEY ("monika_id") REFERENCES "monika"("id") ON DELETE CASCADE ON UPDATE CASCADE;
