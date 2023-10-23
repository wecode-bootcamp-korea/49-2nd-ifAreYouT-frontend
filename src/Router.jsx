import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './pages/Main/Main';
import Login from './pages/Login/Login';
import SignUp from './pages/SignUp/SignUp';
import ProductList from './pages/ProductList/ProductList';
import ProductDetail from './pages/ProductDetail/ProductDetail';
import Order from './pages/Order/Order';
import Payment from './pages/Payment/Payment';
import NotFound from './pages/NotFound/NotFound';
import Promotion from './pages/Promotion/Promotion';
import CompletePayment from './pages/CompletePayment/CompletePayment';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/events/main" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/product-list" element={<ProductList />} />
        <Route path="/events/:id" element={<ProductDetail />} />
        <Route path="/order/:id" element={<Order />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/*" element={<NotFound />} />
        <Route path="/promotion/:id" element={<Promotion />} />
        <Route path="/complete-payment" element={<CompletePayment />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
