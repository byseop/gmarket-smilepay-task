import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}
  html {
    font-size: 10px;
    font-family: 'Apple SD Gothic Neo',
    'AppleSDGothicNeo',
    '-apple-system',
    'BlinkMacSystemFont',
    'Helvetica Neue',
    'Malgun Gothic',
    '맑은 고딕',
    '나눔고딕',
    'Nanum Gothic',
    'Noto Sans KR',
    'Noto Sans CJK KR',
    'arial',
    '돋움',
    'Dotum',
    'Tahoma',
    'Geneva',
    'sans-serif';
  }
  :root {
    --white: #fff;
    --black: #000;
  }

  body {
    background: #fff;
  }

  a {
    text-decoration: none;
  }

  strong {
    color: inherit;
    font-weight: bold;
  }
`;

export default GlobalStyle;
