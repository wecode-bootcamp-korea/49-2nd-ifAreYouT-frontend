import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './pages/Main/Main';
import Login from '../src/pages/Login/Login';
import KakaoLogin from './pages/Login/KakaoLogin';
import NaverLogin from './pages/Login/NaverLogin';
import SignUp from '../src/pages/SignUp/SignUp';
import ProductList from './pages/ProductList/ProductList';
import ProductDetail from './pages/ProductDetail/ProductDetail';
import Mypage from './pages/Mypage/mypage';
import Order from './pages/Order/Order';
import Payment from './pages/Payment/Payment';
import NotFound from './pages/NotFound/NotFound';
import Promotion from './pages/Promotion/Promotion';
import CompletePayment from './pages/CompletePayment/CompletePayment';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import axios from 'axios';
import Test from './pages/Test/Test';
import OAuth from './pages/Login/oath';

const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/login/kakao1" element={<KakaoLogin />} />
        <Route path="/login/kakao" element={<OAuth />} />
        <Route path="/login/naver" element={<NaverLogin />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/product-list" element={<ProductList />} />
        <Route path="/product-detail/:id" element={<ProductDetail />} />
        <Route path="/order" element={<Order />} />
        <Route path="/mypage" element={<Mypage />} />
        <Route path="/events/:id" element={<ProductDetail />} />
        <Route path="/order/:id" element={<Order />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/*" element={<NotFound />} />
        <Route path="/promotion/:id" element={<Promotion />} />
        <Route path="/complete-payment" element={<CompletePayment />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
