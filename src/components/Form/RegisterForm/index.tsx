import Input from '../Input';
import { StyledButton } from '../../../styles/button';
import { StyledForm } from '../../../styles/form';
import { useNavigate } from 'react-router-dom';

import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from 'yup';
import { api } from '../../../services/api';
import React, { useContext } from 'react';
import { iRegisterUserProps, iUserContext } from '../../../@types/types';
import { SubmitHandler, useForm } from "react-hook-form"
import { UserContext } from '../../../contexts/UserContext';

const RegisterForm = () => {
	const navigate = useNavigate()

	const {RegisterUserSubmit} = useContext(UserContext)

	const formSchema = yup.object().shape({
		name: yup.string().required('Nome obrigatório'),
		email: yup.string().required('Email obrigatório').email('Email inválido'),
		password: yup
			.string()
			.matches(/(\d)/, 'Deve conter pelo menos 1 número')
			.matches(/[a-z]/, 'Deve conter pelo menos 1 letra minúscula')
			.matches(/[A-Z]/, 'Deve conter pelo menos 1 letra maiúscula')
			.matches(/\W|_/, 'Deve conter pelo menos 1 caractere especial')
			.matches(/.{8,}/, 'Deve conter pelo menos 8 carateres')
			.required(),
		passwordConfirmation: yup.string().oneOf([yup.ref('password')], 'Confirmação de senha deve ser igual a senha'),
	})

	const { register, handleSubmit, formState: { errors }, } = useForm<iRegisterUserProps>({
		resolver: yupResolver(formSchema),
	})

	const onSubmitFunctionRegister: SubmitHandler<iRegisterUserProps> = data => { 
		const {email, name, password} = data
		const registerUser = {
			name: name, 
			email: email, 
			password: password, 
		}
		RegisterUserSubmit (registerUser)
	}

	return (
	<StyledForm onSubmit={handleSubmit(onSubmitFunctionRegister)} >
		<Input label='Nome' register={register('name')} error={errors.name} type='text' id='name'/>
		<Input label='Email' register={register('email')} error={errors.email} type='email' id='email'/>
		<Input label='Senha' register={register('password')} error={errors.password} type='password' id='password'/>
		<Input label='Confirme a senha' error={errors.password} type='password' id='confirmPassword'/>
		<StyledButton $buttonSize='default' $buttonStyle='gray' type='submit'>
			Cadastrar
		</StyledButton>
	</StyledForm>
)};

export default RegisterForm;
