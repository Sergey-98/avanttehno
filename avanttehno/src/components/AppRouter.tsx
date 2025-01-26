import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { routes } from '../router/index';

export default function AppRouter() {
  return (
    <Routes>
      {routes.map((route) => (
        <Route
          path={route.path}
          element={route.path == '/' ? <Navigate to="/catalog/" /> : <route.component />}
          key={route.path}
        />
      ))}
    </Routes>
  );
}
