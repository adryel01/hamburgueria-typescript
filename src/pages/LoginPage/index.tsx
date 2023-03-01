import { StyledLoginPage } from './style';
import LoginForm from '../../components/Form/LoginForm';
import IllustrationBox from '../../components/IllustrationBox';

import { StyledButtonLink } from '../../styles/button';
import { StyledContainer, StyledGridBox } from '../../styles/grid';
import { StyledParagraph, StyledTitle } from '../../styles/typography';
import { useContext, useEffect } from 'react';
import { UserContext } from '../../contexts/UserContext';
import { api } from '../../services/api';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const LoginPage = () => {
	const navigate = useNavigate()
	const tokenUser = localStorage.getItem('token')
	const userId = localStorage.getItem('userId')
	useEffect(()=>{
		if(tokenUser){
			async function autoLogin() {
				try {
					const response = await api.get(`users/${userId}`, {headers:{Authorization: `Bearer ${tokenUser}`}})
					navigate('/shop')
				} catch (error) {
					toast.error('Faça o login novamente')
				}
			}
			autoLogin()
		}
	},[])

	return(
		<StyledLoginPage>
			<StyledContainer>
				<div className='flexGrid'>
					<div className='left'>
						<StyledGridBox className='formBox'>
							<StyledTitle tag='h2' $fontSize='three'>
								Login
							</StyledTitle>
							<LoginForm />
							<StyledParagraph textAlign='center' fontColor='gray'>
								Crie sua conta para saborear muitas delícias e matar sua fome!
							</StyledParagraph>
							<StyledButtonLink
								to='/register'
								$buttonSize='default'
								$buttonStyle='gray'
							>
								Cadastrar
							</StyledButtonLink>
						</StyledGridBox>
					</div>
					<div className='right'>
						<IllustrationBox />
					</div>
				</div>
			</StyledContainer>
		</StyledLoginPage>
	)
}
;

export default LoginPage;
