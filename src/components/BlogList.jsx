import BlogItem from './BlogItem';
import LoadingBlog from './LoadingBlog';
import useFetch from '../useFetch';

const Blogs = () => {
  const {
    data: blogs,
    isLoading,
    error,
  } = useFetch('http://localhost:8000/blogs');

  return (
    <>
      {isLoading && <LoadingBlog />}
      {blogs && blogs.map((blog) => <BlogItem blog={blog} key={blog.id} />)}
      {error && (
        <h1 className="mt-4 text-center text-xl text-white">{error}.</h1>
      )}
    </>
  );
};

export default Blogs;
