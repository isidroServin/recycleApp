import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './home.css'

function Ticket(props) {
    return (
        <div  className="col-sm-10 col-md-10 col-lg-8" >
            <Card>
                <Card.Body>
                <Card.Title>Buy Description</Card.Title>
                    <div>
                        <table width="100%">
                            <thead>
                                <tr align="center">
                                    <th>Material</th>
                                    <th>Kilograms</th>
                                    <th>Subtotal</th>
                                </tr>
                            </thead>
                            <tbody>
                                {props.materiales.map( mate => {
                                    if(mate.kilos !== ''){
                                        return( <tr key={mate.id} align="center">
                                            <td>{mate.material} </td>
                                            <td>{mate.kilos} </td>
                                            <td>{mate.subtotal} </td>
                                        </tr>);
                                    } else{
                                        return  null;
                                    }
                                    })
                                }
                                <tr align="center">
                                    <td>-----</td>
                                    <td>-----</td>
                                    <td>-----</td>
                                </tr>
                                <tr align="center">
                                    <td> </td>
                                    <td>TOTAL</td>
                                    <td>$ {props.total}
                                    </td>
                                </tr>
                                
                            </tbody>
                            
                        </table>
                    </div>
                <Button className='buttonStule' onClick={props.limpia} type="reset">Done</Button>
                </Card.Body>
            </Card>
        </div>
    )
}

export default Ticket


