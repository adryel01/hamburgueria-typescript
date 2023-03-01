import { Link } from 'react-router-dom';
import { StyledRegisterPage } from './style';
import RegisterForm from '../../components/Form/RegisterForm';
import IllustrationBox from '../../components/IllustrationBox';
import { StyledContainer, StyledGridBox } from '../../styles/grid';
import { StyledTitle } from '../../styles/typography';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { api } from '../../services/api';
import { toast } from 'react-toastify';

const RegisterPage = () => {
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
	
	return (
	<StyledRegisterPage>
		<StyledContainer>
			<div className='flexGrid'>
				<div className='left'>
					<IllustrationBox />
				</div>
				<div className='right'>
					<StyledGridBox className='formBox'>
						<header>
							<StyledTitle tag='h1' $fontSize='three'>
								Cadastro
							</StyledTitle>
							<Link to='/'>Retornar para o login</Link>
						</header>

						<RegisterForm />
					</StyledGridBox>
				</div>
			</div>
		</StyledContainer>
	</StyledRegisterPage>
)};

export default RegisterPage;
