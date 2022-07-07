import './App.css';
import { Routes, Route} from 'react-router-dom';
import HomePage from './pages/homepage/HomePage';
import Services from './pages/services/Services';
import Portfolio from './pages/portfolio/Portfolio';
import About from './pages/about/About';
import Layout from './components/Layout';

function App() {
  return (
      <>
        <Routes>
          <Route path='/' element={<Layout />} > 
            <Route index element={<HomePage />} />
            <Route path='about' element={<About />} />
            <Route path='portfolio' element={<Portfolio />} />
            <Route path='services' element={<Services />} />
            </Route>
        </Routes>
      </>
  );
}

export default App;
