import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
@font-face{
    font-family : "gosanja"
    src: url ("../../font/Gosanja.ttf");
}
@font-face {
    font-family: 'Pretendard';
    src: url('https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff') format('woff');
    font-style: normal;
}

body{
    margin:0px;
    padding:0px;
    box-sizing: border-box;
}

head{
    type="text/javascript"
    src="http://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=y20qex6myf"
}
`;
export default GlobalStyles;
