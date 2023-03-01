import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import ShopPage from './pages/ShopPage';
const Router = () => {
    return (_jsxs(Routes, { children: [_jsx(Route, { path: '/', element: _jsx(LoginPage, {}) }), _jsx(Route, { path: '/register', element: _jsx(RegisterPage, {}) }), _jsx(Route, { path: '/shop', element: _jsx(ShopPage, {}) })] }));
};
export default Router;
