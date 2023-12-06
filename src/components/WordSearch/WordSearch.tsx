'use client';

import { useState } from 'react';
import WordSearchResult from '../WordSearchResult/WordSearchResult';

const WordSearch = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [result, setResult] = useState(true);
  /*   const getWordDetails = async (e) => {
    e.preventDefault();

    console.log(e.target.word.value);
    e.target.reset();
  }; */
  return (
    <div className="">
      <form /* onSubmit={getWordDetails} */>
        <div className="flex justify-center">
          <input
            type="text"
            placeholder="Type your word here"
            className="input input-bordered w-full max-w-2xl"
          />
        </div>
      </form>
      {result && <WordSearchResult />}
    </div>
  );
};

export default WordSearch;
