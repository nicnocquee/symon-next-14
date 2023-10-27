-- CreateTable
CREATE TABLE "monika" (
    "id" TEXT NOT NULL,
    "hostname" TEXT NOT NULL,
    "instance_id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    PRIMARY KEY ("id")
);
