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

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/login/kakao" element={<KakaoLogin />} />
        <Route path="/login/naver" element={<NaverLogin />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/product-list" element={<ProductList />} />
        <Route path="/product-detail" element={<ProductDetail />} />
        <Route path="/order" element={<Order />} />
        <Route path="/mypage" element={<Mypage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
