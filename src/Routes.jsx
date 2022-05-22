import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { path } from './constants/path';
import FormLayout from './layouts/FormLayout/FormLayout';
import ForgotPassword from './pages/Auth/ForgotPassword/ResetPassword';
import Login from './pages/Auth/Login/Login';
import Register from './pages/Auth/Register/Register';
import Home from './pages/Home/Home';

export default function RoutesComponent() {
  return (
    <Routes>
      <Route path={path.home} element={<Home />} exact />
      <Route
        path={path.login}
        element={
          <FormLayout title={'Sign in'}>
            <Login />
          </FormLayout>
        }
      />
      <Route
        path={path.register}
        element={
          <FormLayout title={'Sign up'}>
            <Register />
          </FormLayout>
        }
      />
      <Route
        path={path.resetpassword}
        element={
          <FormLayout title={'Recover Account'} style={{ height: '350px' }}>
            <ForgotPassword />
          </FormLayout>
        }
      />
    </Routes>
  );
}
