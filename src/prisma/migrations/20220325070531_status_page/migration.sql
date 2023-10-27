-- CreateTable
CREATE TABLE "status_page" (
    "id" TEXT NOT NULL,
    "unique_key" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "probe_id" TEXT NOT NULL,
    "created_at" TIMESTAMPTZ(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "status_page.unique_key_index" ON "status_page"("unique_key");
