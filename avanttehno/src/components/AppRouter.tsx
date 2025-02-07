import React, { useEffect } from 'react';
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import { routes } from '../router/index';

export default function AppRouter() {
  const navigate = useNavigate();
  useEffect(() => {
    window.addEventListener('DOMContentLoaded', () => {
      navigate('/');
    });
  });
  return (
    <Routes>
      {routes.map((route) => (
        <Route
          path={route.path}
          // element={route.path == '/' ? <Navigate to="/catalog/" /> : <route.component />}
          element={
            route.path == '/' ? (
              <Navigate to="/catalog/" />
            ) : route.path == '/*' ? (
              <Navigate to="/" />
            ) : (
              <route.component />
            )
          }
          key={route.path}
        />
      ))}
    </Routes>
  );
}
