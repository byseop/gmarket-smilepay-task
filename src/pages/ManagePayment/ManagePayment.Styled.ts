import styled from 'styled-components';
import ManagePayment from './ManagePayment';

const StyledManagePayment = styled(ManagePayment)`
  display: flex;
  height: 100%;
  flex-flow: column;

  .card-list-container {
    flex: 1;
  }

  .add-card-container {
    padding: 15px;
  }
`;

export default StyledManagePayment;
