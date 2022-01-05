import './App.css';
import { BrowserRouter as Router, Routes, Route,} from "react-router-dom";
import Card from './pages/Card';
import Home from './pages/Home';
import Couple from './pages/Couple';
import Event from './pages/Event';
import Footer from './components/Footer';

function App() {
  return (
    <Router>

      <div className='min-h-screen overflow-x-auto bg-slate-900'>
      
        <Routes>
          <Route path="/" element={<Card />} />
        </Routes>

        <Home />
        <Couple /> 
        <Event />
        <Footer />
      </div>
      
    </Router>
  );
}

export default App;
