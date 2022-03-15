import PropTypes from 'prop-types';
import { TrashIcon } from '@heroicons/react/solid';

const BlogItem = ({ blog, handleDelete }) => {
  return (
    <div className="border border-gray-300 my-4 rounded-lg hover:shadow ">
      <div className="px-6 py-4">
        <div className="flex justify-between">
          <div>
            <div className="font-bold text-lg text-white mb-2">
              {blog.title}
            </div>
            <p className="text-gray-400 text-sm mb-4">by: {blog.author}</p>
            <p className="text-gray-300">{blog.body}</p>
          </div>
          <div className="flex-shrink-0">
            <button
              type="button"
              onClick={() => {
                handleDelete(blog.id);
              }}
            >
              <TrashIcon className="text-white block h-6 w-6" />
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
