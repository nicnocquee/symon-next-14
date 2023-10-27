-- AlterTable
ALTER TABLE "token"
RENAME "expiration" TO "expired_at";

-- AlterTable
ALTER TABLE "token"
RENAME "used" TO "is_used";

-- AlterTable
ALTER TABLE "user"
RENAME "enabled" TO "is_enabled";

-- AlterTable
ALTER TABLE "user"
RENAME "suspended" TO "is_suspended";
