import './App.css';
import Navbar from './Navbar';

const App = () => {
  return (
    <div>
      <Navbar />

      <div className="container max-w-7xl my-6 mx-auto px-2 sm:px-6 lg:px-8">
        <div>
          <h1 className="font-bold text-2xl">Homepage</h1>
        </div>
      </div>
    </div>
  );
};

export default App;
