import { useEffect, useState } from 'react';
import BlogItem from './BlogItem';

const Blogs = () => {
  const [blogs, setBlogs] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const handleDelete = (id) => {
    setBlogs(blogs.filter((blog) => blog.id !== id));
  };

  useEffect(() => {
    fetch('http://localhost:8000/blogs')
      .then((res) => res.json())
      .then((data) => {
        setBlogs(data);
        setIsLoading(false);
      });
  }, []);

  return (
    <div>
      {isLoading && (
        <div className="w-full border rounded-md mt-20">
          <div className="px-8 py-6">
            <div className="flex animate-pulse flex-row items-center h-full justify-start space-x-5">
              <div className="w-full flex flex-col gap-y-3">
                <div className="w-72 bg-gray-300 h-6 rounded-md" />
                <div className="w-32 bg-gray-300 h-6 rounded-md" />
                <div className="w-full h-32 bg-gray-300 rounded-md mt-8" />
              </div>
            </div>
          </div>
        </div>
      )}
      {blogs &&
        blogs.map((blog) => (
          <BlogItem blog={blog} handleDelete={handleDelete} />
        ))}
    </div>
  );
};

export default Blogs;
