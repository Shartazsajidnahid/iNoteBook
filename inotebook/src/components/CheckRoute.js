import React from 'react'
import { Home } from './Home';

import Login from './Login';

const CheckRoute = () => {
  return <div> {localStorage.getItem('token')?<Home/>:<Login/>} </div>;
};

export default CheckRoute;