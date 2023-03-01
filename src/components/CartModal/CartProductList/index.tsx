import CartProductCard from './CartProductCard';

import { StyledCartProductList } from './style';
import { StyledButton } from '../../../styles/button';
import { StyledParagraph } from '../../../styles/typography';
import { CartContext } from '../../../contexts/CartContext';
import { useContext } from 'react';

const CartProductList = () => {
	const { currentSale, setCurrentSale } = useContext(CartContext)
	// const totalPrice = currentSale.reduce((lastValue:number, currentValue:number)=> (lastValue+currentValue.price),0)
	const totalPriceArray = [...currentSale]
	const totalPrice = totalPriceArray.reduce((lastValue, currentValue)=>(lastValue+currentValue.price),0)

	return (
		<StyledCartProductList>
			<ul>
				{

					currentSale?.map(product => {
						return (
							<CartProductCard img={product.img} name={product.name} category={product.category} price={product.price} id={product.id} key={product.id} />
						)
					})
				}
			</ul>

			<div className='totalBox'>
				<StyledParagraph>
					<strong>Total</strong>
				</StyledParagraph>
				<StyledParagraph className='total'>R$ {totalPrice.toFixed(2)}</StyledParagraph>
			</div>
			<StyledButton $buttonSize='default' $buttonStyle='gray' onClick={()=> setCurrentSale([])}>
				Remover todos
			</StyledButton>
		</StyledCartProductList>
	)
};

export default CartProductList;
