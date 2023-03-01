import { jsx as _jsx } from "react/jsx-runtime";
import { createContext, useState } from "react";
export const CartContext = createContext({});
export function CartProvider({ children }) {
    const [showModal, setShowModal] = useState(false);
    const [currentSale, setCurrentSale] = useState([]);
    function handleCart(item) {
        setCurrentSale([...currentSale.filter(element => element !== item)]);
    }
    function valueDisplay() {
        const value = showModal ? ('flex') : ('none');
        return value;
    }
    function changeModalState() {
        setShowModal(!showModal);
        valueDisplay();
    }
    return (_jsx(CartContext.Provider, { value: { currentSale, setCurrentSale, handleCart, showModal, setShowModal, valueDisplay, changeModalState }, children: children }));
}
