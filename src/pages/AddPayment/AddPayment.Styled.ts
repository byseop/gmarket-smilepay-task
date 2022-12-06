import styled from 'styled-components';
import AddPayment from './AddPayment';

const StyledAddPayment = styled(AddPayment)`
  display: flex;
  height: 100%;
  flex-flow: column;

  .add-card-form-container {
    flex: 1;
    padding: 15px 15px 0 15px;
  }

  .add-card-container {
    padding: 15px;
  }
`;

export default StyledAddPayment;
