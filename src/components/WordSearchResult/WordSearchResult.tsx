import React from 'react';

const WordSearchResult = () => {
  return (
    <div className="pt-10 flex flex-col justify-center sm:flex-row gap-5">
      <div className="text-1xl text-slate-100 w-auto sm:w-2/4">
        <div>
          <p>Word: life / Bangla Meaning: জীবন / Part Of Speech: noun</p>
          <p>
            Example: Having experienced both, the vampire decided that he
            preferred (un)death to life. He gave up on life.
          </p>
        </div>
        <div>
          <p>Synonyms: existence, experience, time</p>
          <p>Antonyms: coma, void, death</p>
          <audio
            controls
            src="https://api.dictionaryapi.dev/media/pronunciations/en/life-us.mp3"
            className="pt-2"
          />
        </div>
      </div>
      <div>
        <textarea
          placeholder="Your Custom Information"
          className="textarea textarea-bordered textarea-lg w-full"
        ></textarea>
        <div className="flex justify-end">
          <button className="btn btn-outline btn-primary">Primary</button>
        </div>
      </div>
    </div>
  );
};

export default WordSearchResult;
