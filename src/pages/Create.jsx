import { Link } from 'react-router-dom';

const Create = () => {
  return (
    <div>
      <div className="flex justify-between items-center">
        <h1 className="font-bold text-2xl text-white">Create</h1>

        <Link to="/">
          <button
            type="button"
            className="px-3 py-1 bg-blue-500 text-white rounded"
          >
            Back to Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Create;
