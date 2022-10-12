import React from 'react'
import Form from 'react-bootstrap/Form';
import classes from './Formlayout.module.css';
import Button from 'react-bootstrap/Button';
export const Formlayout = () => {
  return (
    <div>
      <Form className={classes.block}>
        <h2 className={classes.block}> PLEASE  GIVE  YOUR  FEED  BACK </h2>
        <Form.Group className="mb-3" style={{ width: '24rem' }}  controlId="exampleForm.ControlInput1">
          <Form.Label>E-mail </Form.Label>
          <Form.Control type="email"  placeholder="xyz@example.com" />
        </Form.Group>
        <Form.Group className="mb-3" style={{ width: '24rem' }}  controlId="exampleForm.ControlTextarea1">
          <Form.Label> Message </Form.Label>
          <Form.Control as="textarea" rows={3} />
        </Form.Group>
        <Button variant="danger" type="submit">
          Submit
        </Button>
      </Form>

    </div>
  )
}

export default Formlayout;