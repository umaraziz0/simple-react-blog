import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const Create = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [body, setBody] = useState('');

  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const blog = { title, author, body };

    setIsLoading(true);

    fetch('http://localhost:8000/blogs', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(blog),
    })
      .then(async (res) => {
        if (!res.ok) throw Error('Something went wrong');

        const Toast = Swal.mixin({
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          timerProgressBar: true,
          timer: 1500,
          didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer);
            toast.addEventListener('mouseleave', Swal.resumeTimer);
          },
        });

        await Toast.fire({
          icon: 'success',
          title: 'Successfully created a new post.',
          color: '#fff',
          background: '#1e293b',
        });
      })
      .then(() => {
        setIsLoading(false);

        navigate('/');
      });
  };

  return (
    <>
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-white">Create New Post</h1>

        <Link to="/">
          <button
            type="button"
            className="rounded border border-white px-3 py-1 text-white"
          >
            Back to Home
          </button>
        </Link>
      </div>

      <div className="w-full rounded-lg border border-white">
        <div className="px-8 py-6">
          <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
            <fieldset>
              <label htmlFor="title" className="block text-lg">
                <span className="text-white">Title</span>
                <div className="mt-3">
                  <input
                    type="text"
                    name="title"
                    id="title"
                    className="block w-full rounded-md border-gray-300 px-4 py-3 focus:border-indigo-500  focus:ring-indigo-500 sm:text-sm lg:w-2/3"
                    required
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </div>
              </label>
            </fieldset>

            <fieldset>
              <label htmlFor="author" className="block text-lg ">
                <span className="text-white">Author</span>
                <div className="mt-3">
                  <input
                    type="text"
                    name="author"
                    id="author"
                    className="block w-full rounded-md border-gray-300 px-4 py-3 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm lg:w-72"
                    required
                    onChange={(e) => setAuthor(e.target.value)}
                  />
                </div>
              </label>
            </fieldset>

            <fieldset>
              <label htmlFor="author" className="block text-lg ">
                <span className="text-white">Body</span>
                <div className="mt-3">
                  <textarea
                    name="author"
                    id="author"
                    className="block h-48 w-full rounded-md border-gray-300 px-4 py-3 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    required
                    onChange={(e) => setBody(e.target.value)}
                  />
                </div>
              </label>
            </fieldset>

            {!isLoading && (
              <button
                type="submit"
                className="flex w-36 items-center justify-center gap-3  rounded bg-blue-500 px-3 py-2 text-white"
              >
                <span className="flex-shrink-0">Create Post</span>
              </button>
            )}

            {isLoading && (
              <button
                type="submit"
                className="flex w-36 items-center justify-center gap-3  rounded bg-blue-500 px-3 py-2 text-white opacity-50"
                disabled
              >
                <div
                  style={{ borderTopColor: 'transparent' }}
                  className="h-5 w-5 animate-spin rounded-full border-4 border-solid border-blue-300"
                />
              </button>
            )}
          </form>
        </div>
      </div>
    </>
  );
};

export default Create;
