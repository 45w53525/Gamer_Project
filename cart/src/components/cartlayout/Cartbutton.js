import CartIcon from "./carticon";
import { useContext } from "react";
import Cartcontext from "../../store/Cartcontext";
import classes from './Cart.module.css';



const Cartbutton = (props) => {

    const Cartctx = useContext(Cartcontext);

    const Cartitems = Cartctx.items.reduce((currentnumber, item) => {
        return currentnumber + item.amount;

    }, 0);
    return (
        <button className={classes.button} onClick={props.onClick}>

            <span className={classes.icon}> <CartIcon></CartIcon></span>
            <span> Your Cart </span>
            <span className={classes.badge}> {Cartitems} </span>
        </button>
        );
};

export default Cartbutton;