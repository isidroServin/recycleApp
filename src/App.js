import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Cartita from './components/Cartita'
import Ticket from './components/Ticket';

function App () {

    const [materiales, setMateriales] = useState([
    {
      material: 'Plastic', id: 0, price: 1.5
    },
    {
      material: 'Metal', id: 1, price: 0.8
    },
    {
      material: 'Paper', id: 2, price: 0.5
    },
    {
      material: 'Glass', id: 3, price: 0.5
    }
    ]);

    const [ticket,setTicket] = useState(0);

    useEffect(() =>{
      if(ticket === 0) console.log("asdad")
    }, [ticket]);

    function handleSubmit(e){
      e.preventDefault();
      setTicket(0)
      e.target.reset();
    }
    

    const agrega = (peso, precio) => {
      let subtotal = peso *precio;
      setTicket(ticket + subtotal);
    };

    const cambiaPrecio = (id) =>{
      console.log(id);
      let newMateriales = [...materiales];
      newMateriales[id] = {material: 'nuevo material', id: id, price: 414}
      setMateriales(newMateriales)
    }

    return (
        <div>
          <Header/>
          <div className='container'>
            <form onSubmit= {handleSubmit} >
              <div className='row'>
                {materiales.map( mate => 
                  <div className="col col-sm-3 col-md-3 col-xs-12" key={mate.id}>
                  <Cartita cambiaPrecio={cambiaPrecio} idd={mate.id} agrega={agrega} price={mate.price} material={mate.material}/>
                  </div>
                )}
              </div><br></br>
              <div align="center" className='container'>
                  <Ticket ticket={ticket} />
              </div>
            </form>
            
          </div>
        </div>
    );
  
}
export default App;
