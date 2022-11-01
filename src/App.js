import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Cartita from './components/Cartita'
import Ticket from './components/Ticket';
import swal from 'sweetalert';

function App () {

    const arrInicial = 
    [
      {
        material: 'Plastic', id: 0, price: 1.5, subtotal: 0, kilos: ''
      },
      {
        material: 'Aluminum', id: 1, price: 0.8, subtotal: 0, kilos: ''
      },
      {
        material: 'Paper', id: 2, price: 0.5, subtotal: 0, kilos: ''
      },
      {
        material: 'Glass', id: 3, price: 0.5, subtotal: 0, kilos: ''
      },
      {
        material: 'Cooper', id: 4, price: 0.7, subtotal: 0, kilos: ''
      }
    ];

    const [materiales, setMateriales] = useState(arrInicial);
    
    useEffect(() => {
      let granTotal = 0.0;
      materiales.forEach( item => {
        granTotal = granTotal + parseFloat(item.subtotal);
      });
      setTotal(granTotal.toFixed(2));
    },[materiales])

    const [total, setTotal] = useState(0);

    const handleSubmit = e => {
      e.preventDefault();
      e.target.reset();
    }

    const agrega = (id, peso) => { 
      let newMateriales = [...materiales];
      let precio = materiales[id].price;
      let subtotal = (peso * precio).toFixed(2);
      newMateriales[id] = {
        material: materiales[id].material,
        id: materiales[id].id,
        price:materiales[id].price,
        subtotal: subtotal,
        kilos: peso
      }
      setMateriales(newMateriales)
    };

    const cambiaPrecio = (id) =>{
      let newMateriales = [...materiales];
      newMateriales[id] = {material: 'Nuevo Material', id: id, price: 0.7}
      setMateriales(newMateriales)
    }

    const limpia = () => {
      setMateriales(arrInicial);
      swal("Good job!", 'Purchase registered successfully', "success");
    }

    return (
        <div>
          <Header/><br></br>
          <div className='container text-center'>
            <form onSubmit = {handleSubmit} >
              <div className='row'>
                  {materiales.map( mate => 
                    <div className='col' key={mate.id}>
                    <Cartita cambiaPrecio={cambiaPrecio} materiales={mate} agrega={agrega} />
                    </div>
                  )}
              </div><br></br>
                <div align="center" className='container'>
                    <Ticket total={total} limpia={limpia} materiales={materiales} />
                </div>
            </form>
          </div>
        </div>
    );
  
}
export default App;
