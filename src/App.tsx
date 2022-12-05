import { BrowserRouter } from 'react-router-dom';
import MainRoutes from '@pages/routes';
import GlobalStyle from '@styles/globalStyles';

function App() {
  return (
    <BrowserRouter>
      <MainRoutes />
      <GlobalStyle />
    </BrowserRouter>
  );
}

export default App;
