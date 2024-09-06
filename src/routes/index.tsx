import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import PublicRoute from './PublicRoute';

const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route
        path="/"
        element={
          <PublicRoute>
            <Home />
          </PublicRoute>
        }
      />
    </Routes>
  </BrowserRouter>
);

export default Router;
