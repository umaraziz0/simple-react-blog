import './App.css';
import Blogs from './components/BlogList';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <div className="bg-gray-900 h-screen">
      <Navbar />

      <div className="container max-w-7xl my-6 mx-auto px-2 space-y-8 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <h1 className="font-bold text-2xl text-white">Homepage</h1>

          <button
            type="button"
            className="px-3 py-1 bg-blue-500 text-white rounded"
          >
            New Post
          </button>
        </div>

        <Blogs />
      </div>
    </div>
  );
};

export default App;
