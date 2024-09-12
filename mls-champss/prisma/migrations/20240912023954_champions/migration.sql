-- DropIndex
DROP INDEX "champions_year_key";

-- AlterTable
CREATE SEQUENCE champions_id_seq;
ALTER TABLE "champions" ALTER COLUMN "id" SET DEFAULT nextval('champions_id_seq');
ALTER SEQUENCE champions_id_seq OWNED BY "champions"."id";
