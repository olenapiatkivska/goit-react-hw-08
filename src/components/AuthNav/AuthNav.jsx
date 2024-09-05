import { NavLink } from 'react-router-dom';
import css from './AuthNav.module.css';

const AuthNav = () => {
  return (
    <div>
      <NavLink className={css.linkAuthNav} to="/register">
        Register
      </NavLink>
      <NavLink className={css.linkAuthNav} to="/login">
        Log In
      </NavLink>
    </div>
  );
};

export default AuthNav;
