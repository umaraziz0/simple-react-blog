import { Link, useParams } from 'react-router-dom';
import useFetch from '../useFetch';
import LoadingBlog from '../components/LoadingBlog';

const Show = () => {
  const { id } = useParams();

  const {
    data: blog,
    isLoading,
    error,
  } = useFetch(`http://localhost:8000/blogs/${id}`);

  return (
    <>
      <div className="flex justify-end">
        <Link to="/">
          <button
            type="button"
            className="rounded border border-white px-3 py-1 text-right text-white"
          >
            Back to Home
          </button>
        </Link>
      </div>
      <div className="w-full rounded border border-white">
        <div className="px-8 py-6">
          {isLoading && <LoadingBlog />}
          {blog && (
            <div>
              <h1 className="mb-4 text-xl font-bold text-white">
                {blog.title}
              </h1>
              <p className="mb-4 text-gray-400">by: {blog.author}</p>
              <p className="text-white">{blog.body}</p>
            </div>
          )}
          {error && (
            <h1 className="mt-4 text-center text-xl text-white">{error}.</h1>
          )}
        </div>
      </div>
    </>
  );
};

export default Show;
