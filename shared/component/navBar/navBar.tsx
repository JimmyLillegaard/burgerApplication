import React, { useState } from 'react';
import { Link } from 'react-router-dom';

interface Properties {
  mainTitle: string;
  loginTitle: string;
  newUserTitle: string;
}

const NavBar: React.FC<Properties> = (props) => {
  return (
    <nav>
      <div className='container m-0 ms-5 '>
        <div className='row navRow'>
          <div className='col'>
            <div className='main-heading'>
              <h1>{props.mainTitle}</h1>
            </div>
          </div>
          <div className='col'></div>
          <div className='col'></div>
          <div className='col'>
            <Link to='/register' className='pe-2'>
              {props.newUserTitle}
            </Link>
            <Link to='/login' className='pe-2'>
              {props.loginTitle}
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
