// src/routes/AppRouter.jsx

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from '../pages/LoginPage';  // Pastikan path dan nama file benar
import AdminPanelPage from '../pages/AdminPanelPage';  // Pastikan path dan nama file benar

function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/admin" element={<AdminPanelPage />} />
      </Routes>
    </Router>
  );
}

export default AppRouter;
