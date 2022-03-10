import { useState } from 'react';

const Blogs = () => {
  const [blogs, setBlogs] = useState([
    {
      id: 1,
      author: 'John Doe',
      title: 'Iste quaerat nulla molestiae nobis soluta ipsum.',
      body: 'Quam natus quibusdam quia incidunt dignissimos. Quia qui modi autem aliquid accusamus sunt alias. Quia rerum quis vero consequuntur iure.',
    },
    {
      id: 2,
      author: 'Jane Doe',
      title: 'Qui quia quisquam quisquam.',
      body: 'Vel qui vel velit. Asperiores enim ipsam hic voluptas. Sit officia eum cupiditate sunt omnis voluptatem. Tenetur et necessitatibus porro in et omnis earum repudiandae. Et quia ut nemo eos.',
    },
    {
      id: 3,
      author: 'Caroline Gislason V',
      title:
        'Corrupti quis eum corrupti omnis reiciendis dolores et dolorem incidunt.',
      body: 'Consequatur nemo a. Aperiam tempora in alias vel ut. Perferendis officiis blanditiis a itaque similique non ducimus. Cumque aut iure eius rem aperiam autem distinctio sit. Veniam molestias vitae assumenda consequatur debitis sunt velit repudiandae officia. Eos quia praesentium commodi accusamus et.',
    },
  ]);

  return (
    <div>
      {blogs.map((blog) => (
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
      ))}
    </div>
  );
};

export default Blogs;
