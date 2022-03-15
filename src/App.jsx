import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Create from './pages/Create';
import Show from './pages/Show';

const App = () => {
  return (
    <Router>
      <div className="overflow-auto bg-gray-900">
        <Navbar />
        <div className="container my-8 mx-auto max-w-7xl space-y-8 px-2 sm:px-6 lg:px-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blogs/create" element={<Create />} />
            <Route path="/blogs/:id" element={<Show />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
