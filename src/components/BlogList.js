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
    <div className="">
      {isLoading && (
        <div className="w-full border rounded-md mt-4">
          <div className="px-8 py-6">
            <div className="flex animate-pulse flex-row items-center h-full justify-start space-x-5">
              <div className="w-full flex flex-col gap-y-3">
                <div className="w-72 bg-gray-300 h-6 rounded-md" />
                <div className="w-32 bg-gray-300 h-6 rounded-md" />
                <div className="w-full h-24 bg-gray-300 rounded-md mt-8" />
              </div>
            </div>
          </div>
        </div>
      )}
      {blogs &&
        blogs.map((blog) => (
          <BlogItem blog={blog} handleDelete={handleDelete} key={blog.id} />
        ))}
      {error && <h1 className="text-center text-xl text-white">{error}.</h1>}
    </div>
  );
};

export default Blogs;
