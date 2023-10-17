const { PrismaClient } = require('@prisma/client')

const jsonData = require('./data.json');

const prisma = new PrismaClient()

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const seedData = async () => {
  try {
    for (const wordData of jsonData) {
      if(!wordData) continue
      console.log(wordData)
      const synonyms = wordData.synonyms
      const exampleSentences = wordData.exampleSentences.split('\n')
      if (!synonyms.length && !exampleSentences.length) continue
      await prisma.word.create({
        data: {
          word: wordData.word,
          translation: wordData.translation,
          additionalNote: wordData.additionalNote,
          exampleSentences: { set: exampleSentences },
          synonyms: { set: synonyms }
        }
      });
    }
    console.log('Data seeded successfully.');
  } catch (error) {
    console.error('Error seeding data:', error);
  } finally {
    await prisma.$disconnect();
  }
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const seedWordData = async () => {
  try {
    const word = await prisma.word.create({
      data: {
        word: "example",
        translation: "উদাহরণ",
        additionalNote: "A representative instance",
        exampleSentences: {
          set: ["This is an example sentence.", "Another example sentence."]
        },
        synonyms: {
          set: ["illustration", "demonstration"]
        }
      }
    });

    console.log('Word seeded successfully:', word);
  } catch (error) {
    console.error('Error seeding word:', error);
  } finally {
    await prisma.$disconnect();
  }
};

// seedWordData();

seedData()
