import React from 'react';

/* interface WordCardProps {
  text?: string;
} */

const WordCard = () => {
  return (
    <div className="card w-auto border border-zinc-700">
      <div className="card-body">
        <h2 className="card-title">life / জীবন</h2>
        <p>
          <span className="text-slate-400">Example : </span>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum odio
          molestiae ea corrupti eligendi aspernatur quis
        </p>
        <p>
          <span className="badge badge-neutral mx-1 hover:bg-blue-500">
            existence
          </span>
          <span className="badge badge-neutral mx-1 hover:bg-blue-500">
            experience
          </span>
          <span className="badge badge-neutral mx-1 hover:bg-blue-500">
            time
          </span>
        </p>
      </div>
    </div>
  );
};

export default WordCard;
