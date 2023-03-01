import { StyledShopPage } from './style';
import CartModal from '../../components/CartModal';
import Header from '../../components/Header';
import ProductList from '../../components/ProductList';

import { StyledContainer } from '../../styles/grid';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const ShopPage = () => {

	const userToken = localStorage.getItem('token')
	const navigate = useNavigate()
	
	useEffect(()=>{
		if(!userToken){
			navigate('/')
			toast.error('Faça o login para acessar a loja')
		} 
	},[])

	return(
		<StyledShopPage>
			<CartModal />
			<Header />
			<main>
				<StyledContainer containerWidth={1300}>
					<ProductList />
				</StyledContainer>
			</main>
		</StyledShopPage>
	)
}
;

export default ShopPage;
