import React from 'react';

const WordSearchResult = () => {
  return (
    <div className="mt-10 flex flex-col justify-center sm:flex-row gap-5 ">
      <div className="text-1xl text-slate-100 w-auto sm:w-2/4 bg-gray-900 rounded-2xl p-5">
        <div>
          <p className="text-blue-500 text-2xl font-extrabold">life / জীবন</p>

          <p className="mt-2">
            <span className="text-slate-400">Example:</span> Having experienced
            both, the vampire decided that he preferred (un)death to life. He
            gave up on life.
          </p>
        </div>
        <div>
          <div className="mt-2">
            <div className="mt-2">
              <p>
                <span className="text-slate-400">Synonyms:</span>
              </p>
              <div className="mt-2">
                <span className="badge badge-neutral mx-2 hover:bg-blue-500">
                  existence
                </span>
                <span className="badge badge-neutral mx-2 hover:bg-blue-500">
                  experience
                </span>
                <span className="badge badge-neutral mx-2 hover:bg-blue-500">
                  time
                </span>
              </div>
            </div>

            <div className="mt-2">
              <p>
                <span className="text-slate-400">Antonyms:</span>
              </p>
              <div className="mt-2">
                <span className="badge badge-neutral mx-2 hover:bg-blue-500">
                  coma
                </span>
                <span className="badge badge-neutral mx-2 hover:bg-blue-500">
                  void
                </span>
                <span className="badge badge-neutral mx-2 hover:bg-blue-500">
                  death
                </span>
              </div>
            </div>
          </div>
          <audio
            controls
            src="https://api.dictionaryapi.dev/media/pronunciations/en/life-us.mp3"
            className="mt-4"
          />
        </div>
      </div>
      <div>
        <textarea
          placeholder="Your Custom Information"
          className="textarea textarea-bordered textarea-lg w-full"
          rows={7}
        ></textarea>
        <div className="flex justify-end">
          <button className="btn btn-outline btn-neutral">Submit</button>
        </div>
      </div>
    </div>
  );
};

export default WordSearchResult;
