import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from 'states/store';
import AdminHomePage from 'components/admin-MainPage/AdminHomePage';
import AdminNoGroupPage from 'components/admin-MainPage/AdminNoGroupPage';
import OnBoardingPage from 'pages/OnBoardingPage';

const HomePrivate = () => {
  const loginState = useSelector((state: RootState) => state.login);
  const isLogin: boolean = loginState.islogin;
  const isAdmin: boolean = loginState.userData.isAdmin;
  const hasGroup: boolean = loginState.userData?.groupName.length > 0;

  return (
    <>
      {isLogin ? (
        isAdmin ? (
          hasGroup ? (
            <AdminHomePage />
          ) : (
            <AdminNoGroupPage />
          )
        ) : hasGroup ? (
          <div>알바홈</div>
        ) : (
          <div>매니저에게 초대받으세요</div>
        )
      ) : (
        <OnBoardingPage />
      )}
    </>
  );
};

export default HomePrivate;
