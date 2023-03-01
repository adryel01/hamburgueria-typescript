import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { MdSearch } from 'react-icons/md';
import { StyledSearchForm } from './style';
import { StyledButton } from '../../../styles/button';
import { useState } from 'react';
import { UserContext } from '../../../contexts/UserContext';
import { useContext } from 'react';
const SearchForm = () => {
    const [inputSearch, setInputSearch] = useState('');
    const { filteredProducts, setFilteredProducts, products, setProducts } = useContext(UserContext);
    function handleSearch() {
        if (inputSearch !== '' || filteredProducts.length == 0) {
            setFilteredProducts(products.filter(product => product.name.toLowerCase().includes(inputSearch) || product.category.toLowerCase().includes(inputSearch)));
        }
        else {
            setFilteredProducts(products);
        }
    }
    function eventInput(evento) {
        setInputSearch(evento.currentTarget.value);
    }
    function prevent(event) {
        event.preventDefault();
        handleSearch();
    }
    return (_jsxs(StyledSearchForm, { onSubmit: (event) => prevent(event), children: [_jsx("input", { type: 'text', placeholder: 'Digitar pesquisa', onChange: (evento) => eventInput(evento) }), _jsx(StyledButton, { type: 'submit', "$buttonSize": 'medium', "$buttonStyle": 'green', children: _jsx(MdSearch, {}) })] }));
};
export default SearchForm;
