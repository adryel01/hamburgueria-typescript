import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { MdShoppingCart, MdLogout } from 'react-icons/md';
import SearchForm from './SearchForm';
import { StyledHeader } from './style';
import LogoKenzieBurguer from '../../assets/LogoKenzieBurguer.svg';
import { StyledContainer } from '../../styles/grid';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../../contexts/CartContext';
import { useContext } from 'react';
const Header = () => {
    const navigate = useNavigate();
    const { changeModalState } = useContext(CartContext);
    function exitShop() {
        navigate('/');
        localStorage.clear();
    }
    function openCart() {
        changeModalState();
    }
    return (_jsx(StyledHeader, { children: _jsx(StyledContainer, { containerWidth: 1300, children: _jsxs("div", { className: 'flexGrid', children: [_jsx("img", { src: LogoKenzieBurguer, alt: 'Kenzie Burguer Logo', className: 'logo' }), _jsxs("nav", { className: 'nav', role: 'navigation', children: [_jsx(SearchForm, {}), _jsxs("div", { className: 'buttons', children: [_jsx("button", { type: 'button', onClick: () => openCart(), children: _jsx(MdShoppingCart, { size: 28 }) }), _jsx("button", { type: 'button', onClick: () => exitShop(), children: _jsx(MdLogout, { size: 28 }) })] })] })] }) }) }));
};
export default Header;
