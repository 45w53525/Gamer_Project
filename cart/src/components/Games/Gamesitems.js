import { useContext } from 'react';
import classes from './Gamesitems.module.css';
import Gameitemform from './Gameitemform';
import Cartcontext from '../../store/Cartcontext';

const Gamesitems = props => {
    const cartCtx = useContext(Cartcontext);
    const price = `$${props.price.toFixed(2)}`;

    const addtocarthandler = amount => {
        cartCtx.addItem({

            id: props.id,
            name: props.name,
            amount: amount,
            price: props.price
        });
     };
        return (
            <li className={classes.gamess}>
                <div>
                    <div >
                        <img className={classes.image} src={props.image} alt="Games-images" />
                    </div>
                    <h3>{props.name}</h3>
                    <div className={classes.description}>{props.description}</div>
                    <div className={classes.price}>{price}</div>
                </div>
                <div>
                    <Gameitemform onAddtothecart={addtocarthandler}></Gameitemform>
                </div>
            </li>
        );

    
};

export default Gamesitems;