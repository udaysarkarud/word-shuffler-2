import WordCard from '@/components/WordCard/WordCard';
import WordSearch from '@/components/WordSearch/WordSearch';
import React from 'react';

const listofwords = () => {
  return (
    <div>
      <WordSearch title={'Search Your Word'} />
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 masonry">
        {/* cards */}

        <WordCard />
        <WordCard />
        <WordCard />
        <WordCard />
        <WordCard />
        <WordCard />
        <WordCard />
        <WordCard />
        <WordCard />
        <WordCard />
      </div>
    </div>
  );
};

export default listofwords;
