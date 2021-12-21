import React from 'react';
import { useDispatch } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';
import { startLogout } from '../../actions/auth';

const Navbar = () => {

  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(startLogout());
  }

  return (
    <div className='nav_container'>
        <header>
          <NavLink to='/' className='logo'>
            Logo
          </NavLink>
          <ul>
            <li>
              <NavLink to='#' activeClassName="active">Home</NavLink>
            </li>
            <li>
              <NavLink to='#'>About</NavLink>
            </li>
            <li>
              <NavLink to='#'>Team</NavLink>
            </li>
            <li>
              <button
              onClick={handleLogout}
              >
                <i className="fas fa-sign-out-alt"></i> Logout
              </button>
              {/* <NavLink to="/auth/login"><i className="fas fa-sign-out-alt"></i> Logout</NavLink> */}
            </li>
          </ul>
        </header>
        
      </div>
  );
};

export default Navbar;
