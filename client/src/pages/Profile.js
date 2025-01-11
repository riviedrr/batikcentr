import React from 'react';
import { useNavigate } from 'react-router-dom';
// import { Context } from '../index';
import { LOGIN_ROUTE } from '../utilis/consts';
// import { observer } from 'mobx-react-lite';
// import { useContext } from 'react';

const Profile = () => {
  const navigate = useNavigate()
    
  const logout = () => {
    user.setUser({})
    user.setIsAuth(false)
    navigate(LOGIN_ROUTE)
  }

  return (
    <div>
        <h1 style={{textAlign: "center", fontSize: 36, paddingBottom: 53}}>Профиль</h1>
        <button onClick={() => logout()}>Выйти</button>
    </div>
  );
}

export default Profile;