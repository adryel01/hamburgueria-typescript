import { MdSearch } from 'react-icons/md';
import { StyledSearchForm } from './style';
import { StyledButton } from '../../../styles/button';
import { MouseEvent, useState } from 'react';
import { UserContext } from '../../../contexts/UserContext';
import { useContext } from 'react';

const SearchForm = () => {
	const [inputSearch, setInputSearch] = useState('')
	const { filteredProducts, setFilteredProducts, products, setProducts } = useContext(UserContext)

	function handleSearch() {
		if (inputSearch !== '' || filteredProducts.length == 0) {
			setFilteredProducts(products.filter(product => product.name.toLowerCase().includes(inputSearch) || product.category.toLowerCase().includes(inputSearch)))
		} else {
			setFilteredProducts(products)
		}

	}

	function eventInput(evento:React.ChangeEvent<HTMLInputElement>){
		setInputSearch(evento.currentTarget.value)
	}


	function prevent(event:React.FormEvent<HTMLFormElement>){
		event.preventDefault()
		handleSearch()
	}
		return (
			<StyledSearchForm onSubmit={(event)=> prevent(event)}>
				<input type='text' placeholder='Digitar pesquisa' onChange={(evento) => eventInput(evento)}/>
				<StyledButton type='submit' $buttonSize='medium' $buttonStyle='green'>
					<MdSearch />
				</StyledButton>
			</StyledSearchForm>
		)
}
	;

	export default SearchForm;
