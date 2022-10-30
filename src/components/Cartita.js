import { useEffect, useState } from 'react';
import { CardImg } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import myImage from "./../assets/vidrio.png";

function Cartita(props) {
  
  const [kilos, setKilos] = useState(0);

  const handleChange = (event) =>{
    setKilos(event.target.value);
    console.log('El valor de los kilos es:'+kilos);
  }

  useEffect(() =>{
    console.log("Valor de los kilos actual es: "+kilos);
  }, [kilos])

  
  return (
    <div>
      <Card>
        <CardImg src={myImage} ></CardImg>
        <Card.Body>
          <Card.Title align="center">{props.material} </Card.Title>
          <Card.Text>
            Price/Kg: ${props.price}
          </Card.Text>
          <input value={kilos} onChange={handleChange} placeholder='Weight in Kg' className='form-control'></input><br></br>
          <Button onClick={ () => props.agrega(kilos, props.price) } variant="primary" >Add</Button>&nbsp; &nbsp;
          <Button onClick={() => props.cambiaPrecio(props.idd)} variant="primary" >Change price</Button>
        </Card.Body>
      </Card>
      
    </div>
    
  );
}

export default Cartita;