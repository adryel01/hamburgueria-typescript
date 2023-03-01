import { StyledProductCard } from './style';
import { StyledButton } from '../../../styles/button';
import { StyledParagraph, StyledTitle } from '../../../styles/typography';
import { MouseEvent} from 'react';
import { iProductCard } from '../../../@types/types';
import { CartContext } from '../../../contexts/CartContext';
import { useContext, useState } from 'react';
import { toast } from 'react-toastify';


function ProductCard({ img, name, category, price, id }: iProductCard) {
	const {setCurrentSale, currentSale} = useContext(CartContext)
	const item: iProductCard = {img: img, name: name, category: category, price: price, id: id}
	
	function eventClick(event:MouseEvent){
		if (currentSale.includes(currentSale.find(element => element.id == event.currentTarget.id) as iProductCard)){
			toast.error('Item já adicionado ao carrinho',{position: "bottom-right"})
		} else {
			setCurrentSale([...currentSale, item])
			toast.success('Item adicionado ao carrinho',{position: "bottom-right"})
		}
		
	}

	return (
		<StyledProductCard>
			<div className='imageBox'>
				<img src={img} alt={name} />
			</div>
			<div className='content'>
				<StyledTitle tag='h3' $fontSize='three'>
					{name}
				</StyledTitle>
				<StyledParagraph className='category'>{category}</StyledParagraph>
				<StyledParagraph className='price'>R$ {price}</StyledParagraph>
				<StyledButton $buttonSize='medium' $buttonStyle='green' id={id} className='ButtonAddCart' onClick={(event)=> eventClick(event)}>
					Adicionar
				</StyledButton>
			</div>
		</StyledProductCard>
	)
}
;

export default ProductCard;
