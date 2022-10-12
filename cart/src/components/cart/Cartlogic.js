import { useContext } from "react";
import Model from "../ui/Model";
import classes from "./Cartlogic.module.css";
import Cartcontext from "../../store/Cartcontext";
import CartItem from "./CartItem";
const Cart = (props) => {

    const cartCtx = useContext(Cartcontext);

    const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
    const hascartitem = cartCtx.items.length > 0;

    const cartitemremoved = (id) => {
        cartCtx.removeItem(id)
    };

    const cartaddhandler = (item) => {
        cartCtx.addItem({ ...item, amount: 1 });




    };


    const cartitems = (
        <ul className={classes.cartitems}>
            {

                cartCtx.items.map((item) => (

                    <CartItem key={item.id} id={item.id} name={item.name} amount={item.amount} price={item.price} onRemove={cartitemremoved.bind(null, item.id)} onAdd={cartaddhandler.bind(null, item)}> </CartItem>

                ))}
        </ul>
    );
    return (
        <Model>
            {cartitems}
            <div className={classes.total}>
                <span>Total Amount</span>
                <span> {totalAmount} </span>
            </div>
            <div className={classes.actions}>
                <button className={classes['button--alt']} onClick={props.onClose}>Close</button>

                {hascartitem && <button className={classes.button}>Order</button>}

            </div>
        </Model>

    )

};

export default Cart;