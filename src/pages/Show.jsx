import { Link, useNavigate, useParams } from 'react-router-dom';
import { TrashIcon } from '@heroicons/react/solid';
import Swal from 'sweetalert2';
import useFetch from '../useFetch';
import LoadingBlog from '../components/LoadingBlog';

const Show = () => {
  const navigate = useNavigate();

  const { id } = useParams();

  const {
    data: blog,
    isLoading,
    error,
  } = useFetch(`http://localhost:8000/blogs/${id}`);

  const handleDelete = () => {
    const Toast = Swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timerProgressBar: true,
      timer: 2000,
      didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer);
        toast.addEventListener('mouseleave', Swal.resumeTimer);
      },
    });

    Toast.fire({
      title: 'Deleting...',
      color: '#fff',
      background: '#1e293b',
    });

    fetch(`http://localhost:8000/blogs/${id}`, {
      method: 'DELETE',
    }).then(() => {
      Toast.fire({
        icon: 'success',
        title: 'Post deleted.',
        color: '#fff',
        background: '#1e293b',
      });

      navigate('/');
    });
  };

  return (
    <>
      <div className="flex justify-end">
        <Link to="/">
          <button
            type="button"
            className="rounded border border-white px-3 py-1 text-right text-white"
          >
            Back to Home
          </button>
        </Link>
      </div>
      {isLoading && <LoadingBlog />}

      {blog && (
        <div className="w-full rounded border border-white">
          <div className="flex items-start justify-between px-8 py-6">
            <div className="">
              <h1 className="mb-4 text-xl font-bold text-white">
                {blog.title}
              </h1>
              <p className="mb-4 text-gray-400">by: {blog.author}</p>
              <p className="text-white">{blog.body}</p>
            </div>
            <button type="button" onClick={handleDelete}>
              <TrashIcon className="h-6 w-6 text-white" />
            </button>
          </div>
        </div>
      )}

      {error && (
        <h1 className="mt-4 text-center text-xl text-white">{error}.</h1>
      )}
    </>
  );
};

export default Show;
