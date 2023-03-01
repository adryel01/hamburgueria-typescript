import { createContext, useState } from "react";
import { iCartContext, iCartContextProps , iProductCard } from "../@types/types";

export const CartContext = createContext({} as iCartContext)

export function CartProvider({children}:iCartContextProps){
	const [showModal, setShowModal] = useState(false)
	const [currentSale, setCurrentSale] = useState<iProductCard[]>([])

	function handleCart(item:iProductCard) {
		setCurrentSale([...currentSale.filter(element => element !== item)])
	}

	function valueDisplay(){
		const value: string = showModal? ('flex'):('none');
		return value
	}

	function changeModalState(){
		setShowModal(!showModal)
		valueDisplay()
	}

	return (
		<CartContext.Provider value={{currentSale, setCurrentSale, handleCart, showModal, setShowModal, valueDisplay, changeModalState}}>
			{children}
		</CartContext.Provider>
	)
}