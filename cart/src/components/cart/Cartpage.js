import Header from '../cartlayout/Header';
import Gameslist from '../Games/Gameslist';
import Cart from './Cartlogic';
import { useState } from 'react';
import Cartprovider from '../../store/Cartprovider';


const Cartpage = () => {

    const [show, showfunction] = useState(false);

    const cartshowfunction = () => {
        showfunction(true);
    }

    const cartnoshowfucntion = () => {
        showfunction(false);
    }

    return (

        <Cartprovider>
            {show && <Cart onClose={cartnoshowfucntion}></Cart>}
            <Header onShowCart={cartshowfunction}> </Header>
            <main>
                < Gameslist></ Gameslist>
            </main>
        </Cartprovider>
    );
};

export default Cartpage;