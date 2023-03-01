import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
// import { StyledTextField } from '../../../styles/form';
import { TextField } from '@mui/material';
import { StyledParagraph } from '../../../styles/typography';
function Input({ label, register, error, type, id }) {
    return (_jsxs("fieldset", { children: [_jsx(TextField, { label: label, ...register, type: type, id: id }), error ? _jsx(StyledParagraph, { fontColor: 'red', children: error.message }) : null] }));
}
;
export default Input;
