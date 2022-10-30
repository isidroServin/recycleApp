import React, {Fragment, useState} from 'react'

const Contador = () => {

    const [contador, setContador] = useState(4);
    const [arr, setArr] = useState([1,2,3]);

    const incrementaContador = () => {
        console.log('entramos al evento del boton ');
        setContador(contador + 1)
        setArr(
            [...arr, contador]
        )
    }

    return ( 
        <Fragment>
            <div>
                hola, soy un contador y mi valor es: {contador}
            </div>
            <button onClick={incrementaContador}>Aumentar contador</button>
            <div>
                hola, soy un arreglo y mi info es:
                {
                    arr.map( (item, key) =>
                        <p >{item} - {key}</p>
                    )
                }
            </div>
        </Fragment>
        
     );
}
 
export default Contador;