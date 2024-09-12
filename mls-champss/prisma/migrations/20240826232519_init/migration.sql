-- CreateTable
CREATE TABLE "champions" (
    "id" INT NOT NULL,
    "year" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "score" TEXT NOT NULL,
    "teamInfoLink" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "champions_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "champions_year_key" ON "champions"("year");
