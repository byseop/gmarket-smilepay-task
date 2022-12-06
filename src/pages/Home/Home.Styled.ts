import styled from 'styled-components';
import Home from './Home';

const StyledHome = styled(Home)`
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

export default StyledHome;
