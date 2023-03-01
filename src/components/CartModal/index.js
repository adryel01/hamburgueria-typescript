import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { MdClose } from 'react-icons/md';
import CartProductList from './CartProductList';
import { StyledCartModalBox } from './style';
import { StyledParagraph, StyledTitle } from '../../styles/typography';
import { CartContext } from '../../contexts/CartContext';
import { useContext } from 'react';
const CartModal = () => {
    const { showModal, setShowModal, valueDisplay, changeModalState, currentSale } = useContext(CartContext);
    return (_jsx(StyledCartModalBox, { valueDisplay: valueDisplay(), children: _jsxs("dialog", { children: [_jsxs("header", { children: [_jsx(StyledTitle, { tag: 'h2', "$fontSize": 'three', children: "Carrinho de compras" }), _jsx("button", { type: 'button', "aria-label": 'Fechar', onClick: () => { changeModalState(); }, children: _jsx(MdClose, { size: 21 }) })] }), _jsx("div", { className: 'cartBox', children: currentSale.length !== 0 ? _jsx(CartProductList, {}) : _jsxs("div", { className: 'emptyBox', children: [_jsx(StyledTitle, { tag: 'h3', "$fontSize": 'three', textAlign: 'center', children: "Sua sacola est\u00E1 vazia" }), _jsx(StyledParagraph, { textAlign: 'center', children: "Adicione itens" })] }) })] }) }));
};
export default CartModal;
