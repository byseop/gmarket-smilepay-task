import styled from 'styled-components';
import Button from './Button';

const StyledButton = styled(Button)`
  display: flex;
  width: 100%;
  border: none;
  margin: 0;
  align-items: center;
  justify-content: center;
  gap: 5px;
  padding: 1rem 0;
  cursor: pointer;
  color: var(--text-black-1);
  background: var(--primary-1);
  font-size: 1.5rem;

  > span {
    margin-bottom: 2px;
    svg {
      display: block;
    }
  }
`;

export default StyledButton;
