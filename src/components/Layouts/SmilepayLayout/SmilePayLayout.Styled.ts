import styled from 'styled-components';
import SmilepayLayout from './SmilepayLayout';

const StyledSmilepayLayout = styled(SmilepayLayout)`
  position: fixed;
  width: 410px;
  height: 640px;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background: var(--bg-gray-1);
  border-radius: 4px;
  box-shadow: 0 3px 7px 0 rgb(0 0 0 / 20%);
`;

export default StyledSmilepayLayout;
