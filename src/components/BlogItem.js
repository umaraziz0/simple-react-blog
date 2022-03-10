import PropTypes from 'prop-types';

const BlogItem = ({ blog }) => {
  return (
    <div
      key={blog.id}
      className="border border-gray-300 rounded-lg my-4 cursor-pointer hover:shadow "
    >
      <div className="px-6 py-4">
        <div className="font-bold text-lg mb-2">{blog.title}</div>
        <p className="text-gray-700 text-sm mb-4">by: {blog.author}</p>
        <p className="text-gray-700">{blog.body}</p>
      </div>
    </div>
  );
};

BlogItem.propTypes = {
  blog: PropTypes.shape.isRequired,
};

export default BlogItem;
