import Joi from 'joi';
import { useEffect, useState } from 'react';
import { CardImg } from 'react-bootstrap';
//import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import myImage from "./../assets/vidrio.png";

function Cartita({cambiaPrecio, materiales, agrega}) {
  
  const [kilos, setKilos] = useState('');

  useEffect(() => { 
    agrega(materiales.id, kilos);
  },[kilos])

  const schemaKilos = Joi.number().precision(2);

  function handleChange(event){
      console.log(schemaKilos.validate(event.target.value))
      if( !schemaKilos.validate(event.target.value).error || event.target.value === ""  ) setKilos(event.target.value); 
    
  }


  return (
    <div >
      <div>
        <Card >
          <CardImg src={myImage}  ></CardImg>
          <Card.Body>
            <Card.Title align="center">{materiales.material} </Card.Title>
            <Card.Text>
              Price/Kg: ${materiales.price}
            </Card.Text>
            <input value={materiales.kilos} onChange={handleChange} placeholder='Weight in Kg' className='form-control'></input><br></br>
            {//<Button type='reset' style={btnStyle} onClick={() => cambiaPrecio(materiales.id)}  >Change price</Button> 
            }
          </Card.Body>
        </Card>
      </div>
    </div>
    
  );
}

export default Cartita;