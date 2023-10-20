import WordCard from '@/components/WordCard/WordCard';
import WordSearch from '@/components/WordSearch/WordSearch';
import React from 'react';

const listofwords = () => {
  return (
    <div>
      <WordSearch title={'Search Your Word'} />
      <div className="mt-10 flex flex-col flex-wrap sm:flex-row gap-3">
        {/* cards */}

        <WordCard />
        <WordCard />
        <WordCard />
        <WordCard />
      </div>
    </div>
  );
};

export default listofwords;
