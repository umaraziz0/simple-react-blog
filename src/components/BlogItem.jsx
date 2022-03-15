import PropTypes from 'prop-types';
import { TrashIcon } from '@heroicons/react/solid';
import { Link } from 'react-router-dom';

const BlogItem = ({ blog, handleDelete }) => {
  return (
    <div className="my-4 rounded-lg border border-gray-300 hover:shadow ">
      <div className="px-6 py-4">
        <div className="flex justify-between">
          <Link to={`/blogs/${blog.id}`}>
            <div className="mb-2 text-lg font-bold text-white">
              {blog.title}
            </div>
            <p className="mb-4 text-sm text-gray-400">by: {blog.author}</p>
            <p className="text-gray-300">{blog.body}</p>
          </Link>
          <div className="flex-shrink-0">
            <button
              type="button"
              onClick={() => {
                handleDelete(blog.id);
              }}
            >
              <TrashIcon className="block h-6 w-6 text-white" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

BlogItem.propTypes = {
  blog: PropTypes.shape().isRequired,
  handleDelete: PropTypes.func.isRequired,
};

export default BlogItem;
