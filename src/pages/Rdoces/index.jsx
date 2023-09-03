import React from 'react'
import styles from './RDoces.module.css'
import Header from '../../components/header/index'
import Footer from '../../components/footer/index'
import { Link } from "react-router-dom";



function RDoces() {

  return (
    <>
    <Header/>
    <div className={styles.Root}>
    <div className={styles.Voltar}><Link to="/"><img className={styles.Seta} src="./public/icons/seta-esquerda.png" alt="" /> Voltar</Link></div>
    
    <div className={styles.imagens}>
      <div className={styles.Img1}><Link to="/ReceitasDoces"><img className={styles.Img} src="./public/images/docepratico.png" alt="" /><button className={styles.Botao}>Práticas</button></Link></div>
      <div className={styles.Img2}><Link to="/ReceitasDoces"><img className={styles.Img} src="./public/images/doceveg.png" alt="" /><button className={styles.Botao}>Vegetárianas</button></Link></div>
    </div>
    <div className={styles.imagens}>
      <div className={styles.Img3}><Link to="/ReceitasDoces"><img className={styles.Img} src="./public/images/docequente.png" alt="" /><button className={styles.Botao}>Quentes</button></Link></div>
      <div className={styles.Img4}><Link to="/ReceitasDoces"><img className={styles.Img} src="./public/images/docefrio.png" alt="" /><button className={styles.Botao}>Frias</button></Link></div>
    </div>
    
  </div>
  <Footer/>
   
  </>
 )
}

export default RDoces