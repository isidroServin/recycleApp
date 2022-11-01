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

  function handleChange(event){
    //const re = /^(0|[1-9]\d*)$/;
    //if (event.target.value === '' || re.test(event.target.value)) {
      setKilos(event.target.value);
    //}
    
  }

  const btnStyle = {
     "margin": "2%",
     "background": "#008982"
    }

  return (
    <div>
      <Card >
        <CardImg src={myImage} ></CardImg>
        <Card.Body>
          <Card.Title align="center">{materiales.material} </Card.Title>
          <Card.Text>
            Price/Kg: ${materiales.price}
          </Card.Text>
          <input value={materiales.kilos} onChange={handleChange} placeholder='Type the weight in Kg' className='form-control'></input><br></br>
          {//<Button type='reset' style={btnStyle} onClick={() => cambiaPrecio(materiales.id)}  >Change price</Button> 
          }
        </Card.Body>
      </Card>
    </div>
    
  );
}

export default Cartita;