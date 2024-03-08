import React from 'react';
// import { useEffect, FC } from 'react';
import { Navigate } from 'react-router-dom';
// import { getAccessToken } from '../auth/authService';

/**
 * Компонент-обёртка для роутов. Проверяет наличие токена в localStorage
 * @param {boolean} notAuth нужна ли аутентификация для посещения страницы
 * @example
 * <ProtectedRoute notAuth>
 *  <ChildComponent/>
 * </ProtectedRoute>
 */
const ProtectedRoute = ({
  children,
  notAuth = false,
}) => {

  // const token = getAccessToken();
  const token = true;

  // useEffect(() => {
  //   if (token) {
  //     dispatch(getUserInfoAction());
  //     dispatch(getBotsAction());
  //   }
  // }, [dispatch]);

  if (token && notAuth) {
    return <Navigate to="/" />;
  }

  if (!notAuth && !token) {
    return <Navigate to="/signup" />;
  }

  return children;
};

export default ProtectedRoute;
