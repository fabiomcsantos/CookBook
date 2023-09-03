import React, {useEffect, useState} from 'react'
import LReceitas from '../../components/LReceitas/index'
import api from '../../services/api'


function Teste() {

    const [doces, setDoces] = useState([]);
  
  
    useEffect(() => {
      const url = '/bebidas';
  
      api.get(url)
        .then((response) => {
          setDoces(response.data)
  
  
  
        })
  
    }, [])
    

  return (
    
    <>


    
    <h1>olá</h1>
    
    {
        doces.map(doce => {
          console.log(doce)
          return (<LReceitas key={doce.id} doces={doce} />)
        })
      }

    
    </>
    )
}

export default Teste