import { Link } from 'react-router-dom';
import Blogs from '../components/BlogList';

const Home = () => {
  return (
    <>
      <div className="mb-8 flex items-center justify-between">
        <h1 className="text-2xl font-bold text-white">Homepage</h1>

        <Link to="/blogs/create">
          <button
            type="button"
            className="rounded bg-blue-500 px-3 py-1 text-white"
          >
            Create New Post
          </button>
        </Link>
      </div>

      <Blogs />
    </>
  );
};

export default Home;
