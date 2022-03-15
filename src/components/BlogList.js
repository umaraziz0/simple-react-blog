import { useEffect, useState } from 'react';
import BlogItem from './BlogItem';

const Blogs = () => {
  const [blogs, setBlogs] = useState(null);

  const handleDelete = (id) => {
    setBlogs(blogs.filter((blog) => blog.id !== id));
  };

  useEffect(() => {
    fetch('http://localhost:8000/blogs')
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);

  return (
    <div>
      {blogs &&
        blogs.map((blog) => (
          <BlogItem blog={blog} handleDelete={handleDelete} />
        ))}
    </div>
  );
};

export default Blogs;
