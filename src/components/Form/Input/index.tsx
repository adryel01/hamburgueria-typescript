// import { StyledTextField } from '../../../styles/form';
import { TextField } from '@mui/material';
import { StyledParagraph } from '../../../styles/typography';
import { iInputProps } from '../../../@types/types';



function Input({ label, register, error, type, id }: iInputProps) {
	return (
		<fieldset>
			<TextField label={label} {...register} type={type} id={id} />
			{error ? <StyledParagraph fontColor='red'>{error.message}</StyledParagraph> : null}
		</fieldset>
	)
};

export default Input;
