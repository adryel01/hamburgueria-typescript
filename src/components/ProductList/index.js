import { jsx as _jsx } from "react/jsx-runtime";
import { StyledProductList } from './style';
import { useEffect } from 'react';
import { api } from '../../services/api';
import { toast } from "react-toastify";
import ProductCard from './ProductCard';
import { useContext } from 'react';
import { UserContext } from '../../contexts/UserContext';
const ProductList = () => {
    const token = localStorage.getItem('token');
    const { filteredProducts, setFilteredProducts, products, setProducts } = useContext(UserContext);
    useEffect(() => {
        async function loadProduct() {
            try {
                const response = await api.get('/products', { headers: { Authorization: `Bearer ${token}` } });
                setProducts(response.data);
                setFilteredProducts(response.data);
            }
            catch (error) {
                toast.error('Tempo de requisição excedido', { position: "bottom-right" });
            }
        }
        loadProduct();
    }, []);
    return (_jsx(StyledProductList, { children: filteredProducts?.map(product => {
            return (_jsx(ProductCard, { img: product.img, name: product.name, category: product.category, price: product.price, id: product.id }, product.id));
        }) }));
};
export default ProductList;
