import { MdShoppingCart, MdLogout } from 'react-icons/md';
import SearchForm from './SearchForm';
import { StyledHeader } from './style';
import LogoKenzieBurguer from '../../assets/LogoKenzieBurguer.svg';

import { StyledContainer } from '../../styles/grid';
import { Link, useNavigate } from 'react-router-dom';
import { CartContext } from '../../contexts/CartContext';
import { useContext } from 'react';

const Header = () => {
	const navigate = useNavigate()
	const {changeModalState} = useContext(CartContext)

	function exitShop (){
		navigate('/')
		localStorage.clear()
	}

	function openCart(){
		changeModalState()
	}
	return(
		<StyledHeader>
			<StyledContainer containerWidth={1300}>
				<div className='flexGrid'>
					<img
						src={LogoKenzieBurguer}
						alt='Kenzie Burguer Logo'
						className='logo'
					/>
					<nav className='nav' role='navigation'>
						<SearchForm />
						<div className='buttons'>
							<button type='button' onClick={()=>openCart()}><MdShoppingCart size={28} /></button>
							<button type='button' onClick={()=>exitShop()}><MdLogout size={28} /></button>
						</div>
					</nav>
				</div>
			</StyledContainer>
		</StyledHeader>
	)
};

export default Header;
