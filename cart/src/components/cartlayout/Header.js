import { Fragment } from 'react';
import Wall from '../../Assets/wall.jpg';
import classes from './Header.module.css'
import Cartbutton from './Cartbutton';
import { Link } from 'react-router-dom';
import AuthContext from '../../store/authcontex';
import { useContext } from 'react';
const Header = props => {

    const authctxx = useContext(AuthContext);

    const logout = () => {
        authctxx.logout();
    };


    return <Fragment>
        <header className={classes.header}>
            <h1> Gamer-Shop </h1>
            <nav>
                <ul>
                    <Cartbutton onClick={props.onShowCart} ></Cartbutton>
                    <li>
                        <Link to='/home'> HOME </Link>
                    </li>
                    <li>
                        <Link to='/profile'>SETTING</Link>
                    </li>
                   
                    <li>
                        <button onClick={logout}>Logout</button>
                    </li>
                   
                </ul>
            </nav>
            
        </header >
        <div className={classes.mainimage}>
            <img src={Wall} alt='Game wallpaper!'></img>
        </div>


    </Fragment>

};

export default Header;