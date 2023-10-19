'use client';

const WordSearch = () => {
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
    </div>
  );
};

export default WordSearch;
