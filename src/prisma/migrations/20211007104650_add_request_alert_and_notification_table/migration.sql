-- CreateTable
CREATE TABLE "request" (
    "id" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "method" TEXT NOT NULL DEFAULT E'GET',
    "headers" JSONB,
    "body" TEXT,
    "timeout" INTEGER,
    "probeId" TEXT NOT NULL,
    "created_at" TIMESTAMPTZ(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ(3) NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "alert" (
    "id" TEXT NOT NULL,
    "query" TEXT NOT NULL,
    "message" TEXT,
    "created_at" TIMESTAMPTZ(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ(3) NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "notification" (
    "id" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "data" JSONB NOT NULL,
    "probeId" TEXT NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_request_alert" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_request_alert_AB_unique" ON "_request_alert"("A", "B");

-- CreateIndex
CREATE INDEX "_request_alert_B_index" ON "_request_alert"("B");

-- AddForeignKey
ALTER TABLE "request" ADD FOREIGN KEY ("probeId") REFERENCES "probe"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "notification" ADD FOREIGN KEY ("probeId") REFERENCES "probe"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_request_alert" ADD FOREIGN KEY ("A") REFERENCES "alert"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_request_alert" ADD FOREIGN KEY ("B") REFERENCES "request"("id") ON DELETE CASCADE ON UPDATE CASCADE;
