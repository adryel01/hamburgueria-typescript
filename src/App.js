import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import Router from './routes';
import { GlobalStyles } from './styles/global';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const App = () => (_jsxs(_Fragment, { children: [_jsx(GlobalStyles, {}), _jsx(Router, {}), _jsx(ToastContainer, {})] }));
export default App;
