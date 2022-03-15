import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="flex h-full w-full items-center justify-center">
      <div className="">
        <h1 className="mb-8 text-center text-9xl text-blue-300">404</h1>
        <h2 className="mb-3 text-lg text-white">
          Sorry, we couldn&apos;t find the page you&apos;re looking for.
        </h2>
        <div className="flex justify-center">
          <Link to="/">
            <span className="text-white hover:underline">Back to Home</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
