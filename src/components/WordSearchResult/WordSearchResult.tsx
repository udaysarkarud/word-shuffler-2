'use client';
import React from 'react';

const WordSearchResult = () => {
  const start = (audioUrl: string) => {
    new Audio(audioUrl).play();
  };
  return (
    <div className="mt-10 flex flex-col justify-center sm:flex-row gap-5">
      {/* header and play button */}
      <div className="text-lg text-slate-100 w-auto sm:w-2/4 bg-gray-900 rounded-2xl p-5 space-y-4">
        <div className="flex items-center justify-between">
          <p className="text-blue-500 text-2xl font-extrabold">life / জীবন</p>
          <button
            onClick={() => {
              start(
                'https://api.dictionaryapi.dev/media/pronunciations/en/life-us.mp3'
              );
            }}
          >
            <svg
              className="ml-10 bg-slate-500 rounded-full p-1 hover:bg-blue-500"
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 24 24"
            >
              <path d="M7 9v6h4l5 5V4l-5 5H7z" fill="white" />
            </svg>
          </button>
        </div>
        {/* example */}
        <div>
          <p className="text-slate-400">Example :</p>
          <p>
            Having experienced both, the vampire decided that he preferred
            (un)death to life. He gave up on life.
          </p>
        </div>
        {/* Synonyms */}
        <div>
          <p>
            <span className="text-slate-400">Synonyms:</span>
          </p>
          <div>
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
        {/* Antonyms */}
        <div>
          <p>
            <span className="text-slate-400">Antonyms:</span>
          </p>
          <div>
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
      {/* custom info form */}
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
