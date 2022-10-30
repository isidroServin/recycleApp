import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Ticket(props) {
    return (
        <div>
            <Card style={{width: "50%"}}>
                <Card.Body>
                <Card.Title>Total</Card.Title>
                <Card.Text>
                    ${props.ticket}
                </Card.Text>
                <Button type='submit' variant="primary">Done</Button>
                </Card.Body>
            </Card>
        </div>
    )
}

export default Ticket


