import { jsx as _jsx } from "react/jsx-runtime";
import { createContext, useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { api } from "../services/api";
export const UserContext = createContext({});
export function UserProvider({ children }) {
    const navigate = useNavigate();
    const [tokenUser, setTokenUser] = useState(null);
    async function RegisterUserSubmit(registerUser) {
        try {
            await api.post('/users', registerUser);
            toast.success('Cadastro realizado com sucesso');
            navigate('/');
        }
        catch (error) {
            toast.error('Erro ao cadastrar');
        }
    }
    async function LoginUserSubmit(loginUser) {
        try {
            const response = await api.post('/login', loginUser);
            localStorage.setItem('token', response.data.accessToken);
            localStorage.setItem('userId', response.data.user.id);
            setTokenUser(response.data.accessToken);
            toast.success('Login realizado com sucesso');
            navigate('/shop');
        }
        catch {
            toast.error('Erro ao fazer o login, usuário ou senha incorretos');
        }
    }
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [products, setProducts] = useState([]);
    return (_jsx(UserContext.Provider, { value: { RegisterUserSubmit, LoginUserSubmit, filteredProducts, setFilteredProducts, products, setProducts, tokenUser }, children: children }));
}
