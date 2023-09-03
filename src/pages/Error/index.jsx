import React from 'react';
import Header from '../../components/Header/index';
import Footer from '../../components/footer/index';
import styles from './error.module.css';
import { Link } from "react-router-dom";


function Error() {

  return (
    <div>
    <Header/>
    <div className={styles.Root}>
      <div className={styles.Container}>
        <div className={styles.Error}>
          <img className={styles.icon} src=".././public/icons/alerta.png" alt="" />
          <h1 className={styles.TitleH1}>Erro!</h1>
          <h2 className={styles.TitleH2}>Dados incorretos! <br></br><br></br> Por favor, tente novamente.</h2>
          <Link to="/"><button className={styles.Button}>Voltar</button></Link>
        </div>
      </div>
    <Footer/>
  </div>
  </div>
 )
}

export default Error