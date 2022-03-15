import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Create from './pages/Create';

const App = () => {
  return (
    <Router>
      <div className="h-screen bg-gray-900">
        <Navbar />
        <div className="container my-8 mx-auto max-w-7xl space-y-8 px-2 sm:px-6 lg:px-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/create" element={<Create />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
