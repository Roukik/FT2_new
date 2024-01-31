import '../src/pages/App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Analystics from './pages/Analystics';
import About from './pages/About';
import Comment from './pages/Comment';
import Product from './pages/Product';
import ProductList from './pages/ProductList';
import Sidebar from './components/Sidebar';
import Layout from './layouts/Layout';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="" element={<Dashboard />} />
          <Route path="about" element={<About />} />
          <Route path="comment" element={<Comment />} />
          <Route path="analytics" element={<Analystics />} />
          <Route path="product" element={<Product />} />
          <Route path="products" element={<ProductList />} />
        </Route>
      </Routes>

    </BrowserRouter>
  );
};

export default App;
