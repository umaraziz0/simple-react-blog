import { Link } from 'react-router-dom';

const Create = () => {
  return (
    <div>
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-white">Create</h1>

        <Link to="/">
          <button
            type="button"
            className="rounded border border-white px-3 py-1 text-white"
          >
            Back to Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Create;
