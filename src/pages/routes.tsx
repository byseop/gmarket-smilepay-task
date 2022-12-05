import { Route, Routes, Navigate } from 'react-router-dom';

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<div>123</div>} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default MainRoutes;
