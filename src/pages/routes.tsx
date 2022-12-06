import { Route, Routes, Navigate } from 'react-router-dom';
import * as Layout from '@components/Layouts';
import ManagePayment from './ManagePayment';
import AddPayment from './AddPayment';

const MainRoutes = () => {
  return (
    <Routes>
      <Route element={<Layout.SmilepayLayout />}>
        <Route path="/manage-payment" element={<ManagePayment />} />
        <Route path="/add-payment" element={<AddPayment />} />
      </Route>
      <Route path="*" element={<Navigate to="/manage-payment" />} />
    </Routes>
  );
};

export default MainRoutes;
