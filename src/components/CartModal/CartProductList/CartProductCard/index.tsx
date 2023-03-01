import { MdDelete } from 'react-icons/md';

import { StyledCartProductCard } from './style';
import { StyledTitle } from '../../../../styles/typography';
import { iProductCard } from '../../../../@types/types';
import { CartContext } from '../../../../contexts/CartContext';
import { MouseEvent, useContext } from 'react';



function CartProductCard({ img, name, category, price, id }: iProductCard) {
	const {handleCart, currentSale} = useContext(CartContext)

	return(
	<StyledCartProductCard>
		<div className='imageBox'>
			<img src={img} alt={name} />
		</div>
		<div className='contentBox'>
			<StyledTitle tag='h3' $fontSize='three'>
				{name}
			</StyledTitle>
			<button type='button' aria-label='Remover' id={id} onClick={(event:MouseEvent)=>handleCart(currentSale.find(element => element.id == event.currentTarget.id) as iProductCard)}>
				<MdDelete size={24} />
			</button>
		</div>
	</StyledCartProductCard>
)};

export default CartProductCard;
