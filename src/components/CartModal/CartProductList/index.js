import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import CartProductCard from './CartProductCard';
import { StyledCartProductList } from './style';
import { StyledButton } from '../../../styles/button';
import { StyledParagraph } from '../../../styles/typography';
import { CartContext } from '../../../contexts/CartContext';
import { useContext } from 'react';
const CartProductList = () => {
    const { currentSale, setCurrentSale } = useContext(CartContext);
    // const totalPrice = currentSale.reduce((lastValue:number, currentValue:number)=> (lastValue+currentValue.price),0)
    const totalPriceArray = [...currentSale];
    const totalPrice = totalPriceArray.reduce((lastValue, currentValue) => (lastValue + currentValue.price), 0);
    return (_jsxs(StyledCartProductList, { children: [_jsx("ul", { children: currentSale?.map(product => {
                    return (_jsx(CartProductCard, { img: product.img, name: product.name, category: product.category, price: product.price, id: product.id }, product.id));
                }) }), _jsxs("div", { className: 'totalBox', children: [_jsx(StyledParagraph, { children: _jsx("strong", { children: "Total" }) }), _jsxs(StyledParagraph, { className: 'total', children: ["R$ ", totalPrice.toFixed(2)] })] }), _jsx(StyledButton, { "$buttonSize": 'default', "$buttonStyle": 'gray', onClick: () => setCurrentSale([]), children: "Remover todos" })] }));
};
export default CartProductList;
