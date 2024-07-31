import React from 'react';
import { Router, Routes, Route } from 'react-router-dom';
import { HomePage } from 'pages/HomePage';
import { ContactsPage } from 'pages/ContactsPage';
import { LoginPage } from 'pages/LoginPage';
import { RegisterPage } from 'pages/RegisterPage';
import { SharedLayout } from 'pages/SharedLayout';
import { PrivateRoute } from './PrivateRoute/PrivateRoute';
import { RestrictedRoute } from './RestrictedRoute/RestrictedRoute';

export const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<HomePage />} />
          <Route
            path="register"
            element={
              <RestrictedRoute component={RegisterPage} redirectTo="/contacts" />
            } />          
          <Route 
            path="login"
            element={
              <RestrictedRoute component={LoginPage} redirectTo="/contacts" />
            }
            />
          <Route 
            path="contacts" 
             element={<PrivateRoute component={ContactsPage} redirectTo="/login" />
            } 
          />
        </Route>
      </Routes>
    </Router>
  );
};

