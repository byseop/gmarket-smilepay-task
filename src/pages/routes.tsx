import { Route, Routes, Navigate } from 'react-router-dom';
import * as Layout from '@components/Layouts';
import Home from './Home';

const MainRoutes = () => {
  return (
    <Routes>
      <Route element={<Layout.SmilepayLayout />}>
        <Route path="/" element={<Home />} />
      </Route>
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default MainRoutes;
