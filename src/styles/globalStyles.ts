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

    --primary-1: #fed303;

    --bg-gray-1: #f1f1f1;

    --border-gray-1: #e6e6e6;

    --text-black-1: #222222;
    --text-black-2: #333333;
    --text-black-3: #444444;
  }

  body {
    background: rgba(0,0, 0, 0.3);
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
