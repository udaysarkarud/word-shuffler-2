'use client';
interface WordSearchProps {
  title?: string;
}
const WordSearch: React.FC<WordSearchProps> = ({
  title = 'Type Your Word',
}) => {
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
            placeholder={title}
            className="input input-bordered w-full max-w-2xl"
          />
        </div>
      </form>
    </div>
  );
};

export default WordSearch;
