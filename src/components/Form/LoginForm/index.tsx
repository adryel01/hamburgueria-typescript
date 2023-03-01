import Input from '../Input';
import { StyledButton } from '../../../styles/button';
import { StyledForm } from '../../../styles/form';
import { useNavigate } from 'react-router-dom';

import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from 'yup';
import { api } from '../../../services/api';
import React, { useContext } from 'react';
import { iLoginUserProps, iUserContext } from '../../../@types/types';
import { SubmitHandler, useForm } from "react-hook-form"
import { UserContext } from '../../../contexts/UserContext';

const LoginForm = () => {
	const navigate = useNavigate()

	const { LoginUserSubmit } = useContext(UserContext)

	const formSchema = yup.object().shape({
		email: yup.string().required('Email obrigatório').email('Email inválido'),
		password: yup
			.string()
			.matches(/(\d)/, 'Deve conter pelo menos 1 número')
			.matches(/[a-z]/, 'Deve conter pelo menos 1 letra minúscula')
			.matches(/[A-Z]/, 'Deve conter pelo menos 1 letra maiúscula')
			.matches(/\W|_/, 'Deve conter pelo menos 1 caractere especial')
			.matches(/.{8,}/, 'Deve conter pelo menos 8 carateres')
			.required(),
	})

	const { register, handleSubmit, formState: { errors }, } = useForm<iLoginUserProps>({
		resolver: yupResolver(formSchema),
	})

	const onSubmitFunctionLogin: SubmitHandler<iLoginUserProps> = data => {
		const { email, password } = data
		const loginUser = {
			email: email,
			password: password,
		}
		LoginUserSubmit(loginUser)
	}

	return (
		<StyledForm onSubmit={handleSubmit(onSubmitFunctionLogin)} >
			<Input label='Email' register={register('email')} error={errors.email} type='email' id='email' />
			<Input label='Senha' register={register('password')} error={errors.password} type='password' id='password' />
			<StyledButton $buttonSize='default' $buttonStyle='green' type='submit'>
				Entrar
			</StyledButton>
		</StyledForm>
	)


};

export default LoginForm;
