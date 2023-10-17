-- CreateTable
CREATE TABLE "Word" (
    "id" SERIAL NOT NULL,
    "word" TEXT NOT NULL,
    "translation" TEXT NOT NULL,
    "additionalNote" TEXT NOT NULL,
    "exampleSentences" TEXT NOT NULL,
    "synonyms" TEXT[],

    CONSTRAINT "Word_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DailyWordHistory" (
    "id" SERIAL NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "userId" INTEGER,
    "wordId" INTEGER,

    CONSTRAINT "DailyWordHistory_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "DailyWordHistory" ADD CONSTRAINT "DailyWordHistory_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DailyWordHistory" ADD CONSTRAINT "DailyWordHistory_wordId_fkey" FOREIGN KEY ("wordId") REFERENCES "Word"("id") ON DELETE SET NULL ON UPDATE CASCADE;
