import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import Menu from './components/Menu';
import Categories from './components/Categories/Categories';
import Details from './components/Details';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Menu />} />
        <Route path="categories" element={<Categories />} />
        <Route path="details" element={<Details />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
