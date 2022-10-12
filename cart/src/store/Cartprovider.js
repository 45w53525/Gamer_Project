import Cartcontext from "./Cartcontext";
import { useReducer } from "react";


const defaultstatusofcart = {
    items: [],
    totalAmount: 0
};

const cartReducer = (state, action) => {

    if (action.type === 'ADD') {

        const existingCartItemIndex = state.items.findIndex((item) => item.id === action.item.id);
        console.log(existingCartItemIndex);

        const existingCartItem = state.items[existingCartItemIndex];

        console.log(existingCartItem);

        console.log(existingCartItem);

        const updateditem = state.items.concat(action.item);


        let updateditems;

        if (existingCartItem) {

            const updateditem = {

                ...existingCartItem,

                amount: existingCartItem.amount + action.item.amount
            };

            updateditems = [...state.items];
            updateditems[existingCartItemIndex] = updateditem;

        } else {

            updateditems = state.items.concat(action.item);

        }

        const updatetotalamount = state.totalAmount + action.item.price * action.item.amount;
        return {
            items: updateditem,
            totalAmount: updatetotalamount

        };
    }

    if (action.type === 'REMOVE') {

        const existingCartItemIndex = state.items.findIndex((item) => item.id === action.item.id);

        const existingCartItem = state.items[existingCartItemIndex];

        const updatetotalamount = state.totalAmount + existingCartItem.price;

        let updateditems;

        if (existingCartItem.amount === 1) {

            updateditems = state.items.filter(item => item.id !== action.id);

        } else {
            const updateditems = { ...existingCartItem, amount: existingCartItem.amount - 1 };

            updateditems = [...state.items];
            updateditems[existingCartItemIndex] = updateditems
        } return {

            items: updateditems,
            totalAmount: updatetotalamount

        };
    }


    return defaultstatusofcart;


};

const Cartprovider = (props) => {

    const [cartState, dispacheraction] = useReducer(cartReducer, defaultstatusofcart);

    const Addtothecart = (item) => {
        dispacheraction({ type: 'ADD', item: item });
    };

    const Removefromthecart = (id) => {
        dispacheraction({ type: 'REMOVE', id: id });
    };

    const cartContext = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: Addtothecart,
        removeItem: Removefromthecart,
    };

    return (
        <Cartcontext.Provider value={cartContext}>
            {props.children}
        </Cartcontext.Provider>
    );

};

export default Cartprovider;