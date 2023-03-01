import { createContext, useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { api } from "../services/api";
import { iLoginUserProps, iUserContextProps , iUserContext , iRegisterUserProps , iProductCard } from "../@types/types";

export const UserContext = createContext({} as iUserContext)

export function UserProvider ({children}: iUserContextProps){
	const navigate = useNavigate()
	const [tokenUser, setTokenUser] = useState<string|null>(null)
	

	async function RegisterUserSubmit(registerUser:iRegisterUserProps) {
		try {
			await api.post('/users', registerUser)
			toast.success('Cadastro realizado com sucesso')
			navigate('/')
		} catch (error) {
			toast.error('Erro ao cadastrar')
		}
	}

	async function LoginUserSubmit(loginUser:iLoginUserProps) {
		try {
			const response = await api.post('/login', loginUser)
			localStorage.setItem('token', response.data.accessToken)
			localStorage.setItem('userId', response.data.user.id)
			setTokenUser(response.data.accessToken)
			toast.success('Login realizado com sucesso')
			navigate('/shop')
		} catch {
			toast.error('Erro ao fazer o login, usuário ou senha incorretos')
		}
	}

	const [filteredProducts, setFilteredProducts] = useState<iProductCard[] | []>([])
	const [products, setProducts] = useState<iProductCard[] | []>([])
	

	return (
		<UserContext.Provider value={{RegisterUserSubmit, LoginUserSubmit, filteredProducts, setFilteredProducts, products, setProducts, tokenUser}}>
			{children}
		</UserContext.Provider>
	)
}