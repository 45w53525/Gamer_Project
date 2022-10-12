import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import classes from './Card.module.css';
import { useContext } from 'react';
import Apicontext from './Apicontext';








export const Cardctx = (props) => {


    const Gamelist = useContext(Apicontext);





    return (
        <div>
            <h1 className={classes.text}>N E W S</h1>
            <div className={classes.frame}>


                <Card className={classes.card} >
                    <Card.Img variant="top" src={Gamelist.img} />
                    <Card.Body>


                        <Card.Title>{Gamelist.Gametitle}</Card.Title>

                        <Card.Text>
                            {Gamelist.Description}
                        </Card.Text>
                        < Button className={classes.btn2} variant="danger" >Go somewherelink </Button>

                    </Card.Body>
                </Card>

                <Card className={classes.card}>
                    <Card.Img variant="top" src={Gamelist.img2} />
                    <Card.Body>
                        <Card.Title>{Gamelist.Gametitle2}</Card.Title>
                        <Card.Text>
                            {Gamelist.Description2}
                        </Card.Text>
                        <Button className={classes.btn2} variant="danger">Go somewhere</Button>
                    </Card.Body>
                </Card>

                <Card className={classes.card}>
                    <Card.Img variant="top" src={Gamelist.img3} />
                    <Card.Body>
                        <Card.Title>{Gamelist.Gametitle3}</Card.Title>
                        <Card.Text>
                            {Gamelist.Description3}
                        </Card.Text>
                        <Button className={classes.btn2} variant="danger">Go somewhere</Button>
                    </Card.Body>
                </Card>
            </div>
            <div className={classes.btn} >
                <Button variant="danger" size="lg">MORE NEWS</Button>
            </div>

        </div>
    );
}

export default Cardctx;