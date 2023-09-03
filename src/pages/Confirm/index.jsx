import React from 'react'
import styles from './confirm.module.css'
import Header from '../../components/Header/index'
import Footer from '../../components/footer/index'
import { Link } from 'react-router-dom'


function Confirm() {

  return (
    <div>
    <Header/>
    <div className={styles.Root}>
      <div className={styles.Container}>
        <div className={styles.Confirm}>
          <img className={styles.icon} src="./public/icons/confirma.png" alt="" />
          <h1 className={styles.TitleH1}>Confirmado!</h1>
          <h2 className={styles.TitleH2}>Cadastro efetuado com sucesso! <br></br><br></br><br></br></h2>
          <Link to="/"><button className={styles.Button}>Fechar</button></Link>
        </div>
      </div>
    <Footer/>
  </div>
  </div>
 )
}

export default Confirm