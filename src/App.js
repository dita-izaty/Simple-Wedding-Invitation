import './App.css';
import Card from './pages/Card';
import Home from './pages/Home';
import Couple from './pages/Couple';
import Event from './pages/Event';
import Footer from './components/Footer';


function App() {
  return (
      <div className='min-h-screen overflow-x-auto bg-slate-900'>
        <Card />
        <Home />
        <Couple /> 
        <Event />
        <Footer />
      </div>    
  );
}

export default App;
