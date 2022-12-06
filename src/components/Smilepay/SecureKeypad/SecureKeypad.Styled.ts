import styled from 'styled-components';
import SecureKeypad from './SecureKeypad';

const StyledSecureKeypad = styled(SecureKeypad)`
  width: 100%;
  ul {
    display: flex;
    border: 1px solid var(--border-securekeypad-1);

    flex-wrap: wrap;
    li {
      flex: 1;
      flex-basis: 25%;

      button {
        display: block;
        aspect-ratio: 16/9;
        width: 100%;
        height: 100%;
        background: var(--bg-securekeypad-1);
        border: none;
        margin: 0;
        padding: 0;
        color: var(--white);
        font-size: 2rem;
        cursor: pointer;
        border: 1px solid var(--border-securekeypad-1);
      }
    }
  }
`;

export default StyledSecureKeypad;
