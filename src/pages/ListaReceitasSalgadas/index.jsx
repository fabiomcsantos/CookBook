import React, { useEffect, useState } from 'react';
import Header from '../../components/header/index';
import Footer from '../../components/Footer/index';
import LReceitas from '../../components/LReceitas/index'
import styles from './ListaReceitasSalgadas.module.css'
import api from '../../services/api';
import { Link } from 'react-router-dom';



function Receitas() {
  const [doces, setDoces] = useState([]);
  
  
  useEffect(() => {
    const url = '/salgadas';

    api.get(url)
      .then((response) => {
        setDoces(response.data)



      })

  }, [])

  return (
    <> 
    
    <div className={styles.Root}>
      <Header />
      <div className={styles.Voltar}><Link to="/RSalgadas"><img className={styles.Seta} src="./public/icons/seta-esquerda.png" alt="" /> Voltar</Link></div>
      <div className={styles.Conteudo}>
      <div className={styles.Line}>

   
    {
        doces.map(doce => {
          return (<LReceitas key={doce.id} doces={doce} />)
      
        })
      }
 
      </div>
    </div>

      <Footer />
    </div>
    </>
  )
}

export default Receitas;