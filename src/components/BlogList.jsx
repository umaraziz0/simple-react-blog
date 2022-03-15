import BlogItem from './BlogItem';
import useFetch from '../useFetch';

const Blogs = () => {
  const {
    data: blogs,
    isLoading,
    error,
  } = useFetch('http://localhost:8000/blogs');

  const handleDelete = (id) => {
    console.log(id);
    // setBlogs(blogs.filter((blog) => blog.id !== id));
  };

  return (
    <>
      {isLoading && (
        <div className="mt-4 w-full rounded-md border">
          <div className="px-8 py-6">
            <div className="flex h-full animate-pulse flex-row items-center justify-start space-x-5">
              <div className="flex w-full flex-col gap-y-3">
                <div className="h-6 w-72 rounded-md bg-gray-300" />
                <div className="h-6 w-32 rounded-md bg-gray-300" />
                <div className="mt-8 h-24 w-full rounded-md bg-gray-300" />
              </div>
            </div>
          </div>
        </div>
      )}
      {blogs &&
        blogs.map((blog) => (
          <BlogItem blog={blog} handleDelete={handleDelete} key={blog.id} />
        ))}
      {error && (
        <h1 className="mt-4 text-center text-xl text-white">{error}.</h1>
      )}
    </>
  );
};

export default Blogs;
