import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { MdDelete } from 'react-icons/md';
import { StyledCartProductCard } from './style';
import { StyledTitle } from '../../../../styles/typography';
import { CartContext } from '../../../../contexts/CartContext';
import { useContext } from 'react';
function CartProductCard({ img, name, category, price, id }) {
    const { handleCart, currentSale } = useContext(CartContext);
    return (_jsxs(StyledCartProductCard, { children: [_jsx("div", { className: 'imageBox', children: _jsx("img", { src: img, alt: name }) }), _jsxs("div", { className: 'contentBox', children: [_jsx(StyledTitle, { tag: 'h3', "$fontSize": 'three', children: name }), _jsx("button", { type: 'button', "aria-label": 'Remover', id: id, onClick: (event) => handleCart(currentSale.find(element => element.id == event.currentTarget.id)), children: _jsx(MdDelete, { size: 24 }) })] })] }));
}
;
export default CartProductCard;
