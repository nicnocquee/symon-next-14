-- AlterTable
ALTER TABLE "monika"
ADD COLUMN     "city" TEXT,
ADD COLUMN     "country" TEXT,
ADD COLUMN     "isp" TEXT,
ADD COLUMN     "mac_address" TEXT,
ADD COLUMN     "os" TEXT,
ADD COLUMN     "pid" INTEGER,
ADD COLUMN     "private_ip" TEXT,
ADD COLUMN     "public_ip" TEXT,
ALTER COLUMN "hostname" DROP NOT NULL,
ALTER COLUMN "instance_id" DROP NOT NULL;

-- fill null fields with empty values
UPDATE "monika"
SET city = '', country = '', isp = '', mac_address = '', os = '', pid = 0, private_ip = '', public_ip = '';

-- set not null constraints
ALTER TABLE "monika"
ALTER COLUMN city SET NOT NULL,
ALTER COLUMN country SET NOT NULL,
ALTER COLUMN isp SET NOT NULL,
ALTER COLUMN mac_address SET NOT NULL,
ALTER COLUMN os SET NOT NULL,
ALTER COLUMN pid SET NOT NULL,
ALTER COLUMN private_ip SET NOT NULL,
ALTER COLUMN public_ip SET NOT NULL;
