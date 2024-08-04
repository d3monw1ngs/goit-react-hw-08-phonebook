import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { HomePage } from '../pages/HomePage';
import { ContactsPage } from '../pages/ContactsPage';
import { LoginPage } from '../pages/LoginPage';
import { RegisterPage } from '../pages/RegisterPage';
import { SharedLayout } from '../pages/SharedLayout';
import { PrivateRoute } from '../components/PrivateRoute/PrivateRoute';
import { RestrictedRoute } from '../components/RestrictedRoute/RestrictedRoute';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const App = () => {
  return (
      <>
        <Routes>
            <Route path="/" element={<SharedLayout />}>
              <Route index element={<HomePage />} />
              <Route
                path="register"
                element={
                  <RestrictedRoute component={RegisterPage} redirectTo="/contacts" />}
                 />          
              <Route 
                path="logIn"
                element={
                  <RestrictedRoute component={LoginPage} redirectTo="/contacts" />}
                />
              <Route 
                path="contacts" 
                element={<PrivateRoute component={ContactsPage} redirectTo="/login" />} 
              />
            </Route>
          </Routes>
          <ToastContainer />
      </>
  );
};

