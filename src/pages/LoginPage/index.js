import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { StyledLoginPage } from './style';
import LoginForm from '../../components/Form/LoginForm';
import IllustrationBox from '../../components/IllustrationBox';
import { StyledButtonLink } from '../../styles/button';
import { StyledContainer, StyledGridBox } from '../../styles/grid';
import { StyledParagraph, StyledTitle } from '../../styles/typography';
import { useEffect } from 'react';
import { api } from '../../services/api';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
const LoginPage = () => {
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
    return (_jsx(StyledLoginPage, { children: _jsx(StyledContainer, { children: _jsxs("div", { className: 'flexGrid', children: [_jsx("div", { className: 'left', children: _jsxs(StyledGridBox, { className: 'formBox', children: [_jsx(StyledTitle, { tag: 'h2', "$fontSize": 'three', children: "Login" }), _jsx(LoginForm, {}), _jsx(StyledParagraph, { textAlign: 'center', fontColor: 'gray', children: "Crie sua conta para saborear muitas del\u00EDcias e matar sua fome!" }), _jsx(StyledButtonLink, { to: '/register', "$buttonSize": 'default', "$buttonStyle": 'gray', children: "Cadastrar" })] }) }), _jsx("div", { className: 'right', children: _jsx(IllustrationBox, {}) })] }) }) }));
};
export default LoginPage;
