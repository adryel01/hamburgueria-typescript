import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Link } from 'react-router-dom';
import { StyledRegisterPage } from './style';
import RegisterForm from '../../components/Form/RegisterForm';
import IllustrationBox from '../../components/IllustrationBox';
import { StyledContainer, StyledGridBox } from '../../styles/grid';
import { StyledTitle } from '../../styles/typography';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { api } from '../../services/api';
import { toast } from 'react-toastify';
const RegisterPage = () => {
    const navigate = useNavigate();
    const tokenUser = localStorage.getItem('token');
    const userId = localStorage.getItem('userId');
    useEffect(() => {
        if (tokenUser) {
            async function autoLogin() {
                try {
                    const response = await api.get(`users/${userId}`, { headers: { Authorization: `Bearer ${tokenUser}` } });
                    navigate('/shop');
                }
                catch (error) {
                    toast.error('Faça o login novamente');
                }
            }
            autoLogin();
        }
    }, []);
    return (_jsx(StyledRegisterPage, { children: _jsx(StyledContainer, { children: _jsxs("div", { className: 'flexGrid', children: [_jsx("div", { className: 'left', children: _jsx(IllustrationBox, {}) }), _jsx("div", { className: 'right', children: _jsxs(StyledGridBox, { className: 'formBox', children: [_jsxs("header", { children: [_jsx(StyledTitle, { tag: 'h1', "$fontSize": 'three', children: "Cadastro" }), _jsx(Link, { to: '/', children: "Retornar para o login" })] }), _jsx(RegisterForm, {})] }) })] }) }) }));
};
export default RegisterPage;
