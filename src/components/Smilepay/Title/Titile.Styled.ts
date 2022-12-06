import styled from 'styled-components';
import Title from './Title';

const StyledTitle = styled(Title)`
  background: var(--white);
  .title-container {
    display: flex;
    height: 60px;
    align-items: center;
    justify-content: center;
    border-bottom: 1px solid var(--border-gray-1);
    position: relative;

    h2 {
      font-size: 1.6rem;
      color: var(--text-black-4);
    }

    .btn-container {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);

      button {
        background: none;
        padding: 0;
        margin: 0;
        border: none;
        font-size: 2.5rem;
        cursor: pointer;
        outline: none;

        > svg {
          display: block;
        }
      }

      &.close {
        right: 15px;
      }
      &.back {
        left: 15px;
      }
    }
  }
`;

export default StyledTitle;
