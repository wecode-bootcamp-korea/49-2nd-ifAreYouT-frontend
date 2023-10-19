import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './pages/Main/Main';
import Login from './pages/Login/Login';
import SignUp from './pages/SignUp/SignUp';
import ProductList from './pages/ProductList/ProductList';
import ProductDetail from './pages/ProductDetail/ProductDetail';
import Order from './pages/Order/Order';
import Promotion from './pages/Promotion/Promotion';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/product-list" element={<ProductList />} />
        <Route path="/product-detail/:id" element={<ProductDetail />} />
        <Route path="/order" element={<Order />} />
        <Route path="/promotion/:id" element={<Promotion />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
