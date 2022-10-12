import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import classes from './SecondCardctx.module.css';
import { useContext } from 'react';
import Apicontext from './Apicontext';


export const SecondCardctx = () => {

    const Secondlist = useContext(Apicontext);

    return (
        <div>
            <div className={classes.block}>
                <Card className={classes.card2}>
                    <Card.Img variant="top" src={Secondlist.img4} />
                    <Card.Body>
                        <Card.Title>{Secondlist.Gametitle4}</Card.Title>
                        <Card.Text>
                            {Secondlist.Description4}
                        </Card.Text>
                        <Button variant="danger">Go somewhere</Button>
                    </Card.Body>
                </Card>
                <Card className={classes.card2} >
                    <Card.Img variant="top" src={Secondlist.img7} />
                    <Card.Body>
                        <Card.Title>{Secondlist.Gametitle7}</Card.Title>
                        <Card.Text>
                            {Secondlist.Description7}
                        </Card.Text>
                        <Button variant="danger">Go somewhere</Button>
                    </Card.Body>
                </Card>
            </div>
            <div className={classes.block}>
                <Card className={classes.card2} >
                    <Card.Img variant="top" src={Secondlist.img5} />
                    <Card.Body>
                        <Card.Title>{Secondlist.Gametitle5}</Card.Title>
                        <Card.Text>
                            {Secondlist.Description5}
                        </Card.Text>
                        <Button variant="danger">Go somewhere</Button>
                    </Card.Body>
                </Card>
                <Card className={classes.card2}>
                    <Card.Img variant="top" src={Secondlist.img6} />
                    <Card.Body>
                        <Card.Title>{Secondlist.Gametitle6} </Card.Title>
                        <Card.Text>
                            {Secondlist.Description6}
                        </Card.Text>
                        <Button variant="danger">Go somewhere</Button>
                    </Card.Body>
                </Card>
            </div>




        </div>
    )
}
export default SecondCardctx;