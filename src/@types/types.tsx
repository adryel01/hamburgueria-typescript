/* eslint-disable import/no-unresolved */
import React from "react";
// eslint-disable-next-line import/no-unresolved
import { UseFormRegisterReturn } from "react-hook-form/dist/types/form";
import { FieldError } from "react-hook-form/dist/types/errors";
import { ThemedStyledProps } from "styled-components";

// Interface UserContextProps -----------
export interface iUserContextProps{
	children: React.ReactNode;
}

export interface iUserContext{
	RegisterUserSubmit: (registerUser: iRegisterUserProps) => Promise<void> 
	LoginUserSubmit: (loginUser: iLoginUserProps) => Promise<void>
	filteredProducts: iProductCard[] | [];
	setFilteredProducts: (filteredProduct : iProductCard[] | []) => void
	products: iProductCard[] | [];
	setProducts: (product : iProductCard[] | []) => void
	tokenUser: string|null
}

// Interface RegisterUser ----------
export interface iRegisterUserProps{
	name: string;
	email: string;
	password: string;
}

// Interface LoginUser ------------
export interface iLoginUserProps{
	email: string;
	password: string;
}

export interface iInputProps {
	label: string;
	register?: UseFormRegisterReturn<string>;
	error?: FieldError;
	type: 'text' | 'email' | 'password';
	id: string;
}


export interface iCartContextProps{
	children: React.ReactNode;
}

export interface iProductCard {
	img: string;
	name: string;
	category: string;
	price: number;
	id: string;
}
export interface iCartContext{
	currentSale: iProductCard[];
	setCurrentSale: (currentSale : iProductCard[]) => void;
	handleCart: (item : iProductCard) => void;
	showModal: boolean;
	setShowModal: (value:boolean) => void;
	valueDisplay: () => string;
	changeModalState: ()=> void;
}