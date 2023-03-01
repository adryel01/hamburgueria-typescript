import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { StyledProductCard } from './style';
import { StyledButton } from '../../../styles/button';
import { StyledParagraph, StyledTitle } from '../../../styles/typography';
import { CartContext } from '../../../contexts/CartContext';
import { useContext } from 'react';
import { toast } from 'react-toastify';
function ProductCard({ img, name, category, price, id }) {
    const { setCurrentSale, currentSale } = useContext(CartContext);
    const item = { img: img, name: name, category: category, price: price, id: id };
    function eventClick(event) {
        if (currentSale.includes(currentSale.find(element => element.id == event.currentTarget.id))) {
            toast.error('Item já adicionado ao carrinho', { position: "bottom-right" });
        }
        else {
            setCurrentSale([...currentSale, item]);
            toast.success('Item adicionado ao carrinho', { position: "bottom-right" });
        }
    }
    return (_jsxs(StyledProductCard, { children: [_jsx("div", { className: 'imageBox', children: _jsx("img", { src: img, alt: name }) }), _jsxs("div", { className: 'content', children: [_jsx(StyledTitle, { tag: 'h3', "$fontSize": 'three', children: name }), _jsx(StyledParagraph, { className: 'category', children: category }), _jsxs(StyledParagraph, { className: 'price', children: ["R$ ", price] }), _jsx(StyledButton, { "$buttonSize": 'medium', "$buttonStyle": 'green', id: id, className: 'ButtonAddCart', onClick: (event) => eventClick(event), children: "Adicionar" })] })] }));
}
;
export default ProductCard;
