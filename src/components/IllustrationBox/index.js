import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { StyledIllustrationBox } from './style';
import LogoKenzieBurguer from '../../assets/LogoKenzieBurguer.svg';
import BallsIllustration from '../../assets/BallsIllustrations.svg';
import Icon from '../../assets/Icon.svg';
import { StyledParagraph } from '../../styles/typography';
const IllustrationBox = () => (_jsxs(StyledIllustrationBox, { children: [_jsx("img", { src: LogoKenzieBurguer, alt: 'Logo Kenzie Burguer' }), _jsxs("div", { className: 'styledBox', children: [_jsx("img", { src: Icon, alt: '\u00CDcone de cesta de compras' }), _jsxs(StyledParagraph, { children: ["A vida \u00E9 como um sandu\u00EDche, \u00E9 preciso reche\u00E1-la com os", ' ', _jsx("strong", { children: "melhores" }), " ingredientes."] })] }), _jsx("img", { className: 'ballsImage', src: BallsIllustration, alt: 'Bolinhas' })] }));
export default IllustrationBox;
