import styled from 'styled-components';
import AddCardForm from './AddCardForm';

const StyledAddCardForm = styled(AddCardForm)`
  height: 100%;
  .add-card-form {
    height: 100%;
    border: 1px solid var(--border-gray-1);
    background: var(--white);
    position: relative;

    .form-header {
      .title {
        border-bottom: 1px solid var(--border-gray-1);
        p {
          line-height: 45px;
          font-size: 1.6rem;
          font-weight: bold;
          text-align center;
        }
      }
    }

    .form-content {
      .input-columns {
        display: flex;
        align-items: center;
        padding: 15px;
        font-size: 1.2rem;
        & + .input-columns {
          border-top: 1px solid var(--border-gray-1);
        }
        &:last-child {
          border-bottom: 1px solid var(--border-gray-1);
        }

        .label {
          color: var(--text-gray-1);
          flex-basis: 80px;
        }

        .inputs {
          display: flex;
          flex: 1;

          .input-container {
            max-width: 52px;
            flex: 1;
            position: relative;
            & + .input-container {
              margin-left: 20px;
  
              &:after {
                position: absolute;
                content: '';
                top: 50%;
                left: -14px;
                width: 10px;
                height: 1px;
                background: var(--text-black-1);
              }
            }
  
            input {
              display: block;
              width: 100%;
              padding: 0;
              margin: 0;
              outline: none;
              border: none;
              border-bottom: 1px solid var(--primary-1);
              padding: 5px 10px;
              box-sizing: border-box;
              text-align: center;

              &::placeholder {
                color: var(--text-gray-2);
              }

              &:disabled {
                background: var(--white);
              }
            }
          }

          button {
            position: absolute;
            left: 0;
            top: 0;
            height: 100%;
            width: 100%;
            font-size: 0;
            background: transparent;
            cursor: pointer;
            border: none;
          }
        }

        &.valid-period {
          .input-container {
            & + .input-container {
              &:after {
                width: auto;
                height: auto;
                background: none;
                content: '/';
                left: -10px;
                margin-top: -6px;
                font-size: 15px;
              }
            }
          }
        }

        &.password {
          .input-container {
            max-width: 150px;
          }
        }
      }
    }

    .secure-keypad-container {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
    }
  }
`;

export default StyledAddCardForm;
