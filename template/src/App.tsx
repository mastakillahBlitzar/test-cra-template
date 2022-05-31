import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { LoginPage } from './components/LoginPage';

export const App = () => (
  <Routes>
    <Route path="/" element={<LoginPage />} />
  </Routes>
);
