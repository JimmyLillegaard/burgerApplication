import React from 'react';
import Login from '../../../shared/component/login/login';
import NewUser from '../../../shared/component/newUser/newUser';

interface Property {
  newUser: boolean;
}

const BurgerLogin: React.FC<Property> = (props) => {
  return <>{props.newUser ? <NewUser /> : <Login />}</>;
};

export default BurgerLogin;
