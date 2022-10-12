import classes from "../Games/Gameform.module.css";
import Input from "../ui/Input";
import { useRef, useState } from "react";

const Gameitemform = (props) => {

    const amountref = useRef();
    const [amountisvalid, setAmountisvalid] = useState(true);


    const submithandler = (event) => {

        event.preventDefault();

        const enteredAmount = amountref.current.value;
        const amountNumber = +enteredAmount;



        if (enteredAmount.trim().length === 0 || amountNumber < 1 || amountNumber > 5) {
            setAmountisvalid(false);
            return;
        }

        props.onAddtothecart(amountNumber);


    };

    return (
        <form className={classes.form} onSubmit={submithandler}>
            <Input
                ref={amountref}
                label="Amount"
                input={{
                    id: 'amount',
                    type: 'number',
                    max: '5',
                    min: '1',
                    step: '1',
                    defaultValue: '1'
                }}> </Input>
            <button> + Add </button>
            {!amountisvalid && <p>Please enter valid amount (1-5).</p>}
        </form>
    );

};

export default Gameitemform;