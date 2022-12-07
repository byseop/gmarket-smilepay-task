import styled from 'styled-components';
import CardList from './CardList';

const StyledCardList = styled(CardList)`
  padding: 15px;
  ul {
    display: flex;
    flex-flow: column;
    gap: 10px;

    li {
      position: relative;
      background: var(--white);
      display: flex;
      border: 1px solid var(--border-gary-1);
      border-radius: 4px;
      padding: 15px;
      gap: 15px;
      cursor: pointer;
      align-items: center;

      .card-image {
        font-size: 4rem;
        color: var(--bg-securekeypad-1);
        svg {
          vertical-align: middle;
        }
      }

      .card-info {
        font-size: 1.3rem;

        .card-number {
          margin-top: 5px;
        }
      }

      .btn-remove {
        position: absolute;
        right: 15px;
        top: 50%;
        transform: translateY(-50%);

        button {
          background: none;
          border: none;
          padding: 0;
          margin: 0;
          cursor: pointer;
        }
      }

      .no-card-message {
        font-size: 1.5rem;
        width: 100%;
        text-align: center;
      }
    }
  }
`;

export default StyledCardList;
