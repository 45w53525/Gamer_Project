import { Link } from 'react-router-dom';
import { useContext } from 'react';
import classes from './MainNavigation.module.css';
import AuthContext from '../../store/authcontex';



const MainNavigation = () => {

  const authctx = useContext(AuthContext);

  const isLoggedin = authctx.isLoggedin;

  const logouthandler = () => {
    authctx.logout();
  };
  return (
    <header className={classes.header}>
      <Link to='/'>
        <div className={classes.logo}>Gamer</div>
      </Link>
      <nav>
        <ul>

          {!isLoggedin && (
            <li>
              <Link to='/auth'>Login</Link>
            </li>
          )}
          {isLoggedin && (
            <li>
              <Link to='/cart'>SHOP</Link>
            </li>
          )}
          {isLoggedin && (
            <li>
              <Link to='/profile'>SETTING</Link>
            </li>
          )}
          {isLoggedin && (
            <li>
              <button onClick={logouthandler}>Logout</button>
            </li>
          )}

        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
