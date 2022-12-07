import styled from 'styled-components';
import AddPaymentDone from './AddPaymentDone';

const StyledAddPaymentDone = styled(AddPaymentDone)`
  display: flex;
  flex-flow: column;
  height: 100%;

  .add-card-done-container {
    display: flex;
    flex-flow: column;
    padding: 15px;
    flex: 1;

    .inner {
      background: var(--white);
      border: 1px solid var(--border-gray-1);
      box-sizing: border-box;
      flex: 1;
      padding: 20px;

      .card {
        aspect-ratio: 2 / 1;
        border-radius: 6px;
        border: 1px solid black;
        display: flex;
        flex-flow: column;
        justify-content: space-between;
        padding: 20px;
        background: var(--bg-securekeypad-1);
        color: var(--white);

        .card-title {
          display: flex;
          align-items: center;
          gap: 5px;
          font-size: 3rem;
        }

        .card-info {
          p {
            font-size: 1.5rem;

            & + p {
              margin-top: 8px;
            }
          }
        }
      }

      .done-message {
        margin-top: 30px;
        text-align: center;
        .title {
          font-size: 2rem;
        }
        .des {
          margin-top: 10px;
          font-size: 1.3rem;
          line-height: 1.5;
        }
      }
    }
  }

  .button-container {
    margin-top: 15px;
  }
`;

export default StyledAddPaymentDone;
