import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const BlogItem = ({ blog }) => {
  return (
    <div className="my-4 rounded-lg border border-gray-300 hover:shadow ">
      <div className="px-6 py-4">
        <Link to={`/blogs/${blog.id}`}>
          <div className="mb-2 text-lg font-bold text-white">{blog.title}</div>
          <p className="mb-4 text-sm text-gray-400">by: {blog.author}</p>
          <p className="text-gray-300">{blog.body}</p>
        </Link>
      </div>
    </div>
  );
};

BlogItem.propTypes = {
  blog: PropTypes.shape().isRequired,
};

export default BlogItem;
