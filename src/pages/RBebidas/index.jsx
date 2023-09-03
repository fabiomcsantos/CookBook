import React from 'react'
import styles from './RBebidas.module.css'
import Header from '../../components/header/index'
import Footer from '../../components/footer/index'
import { Link } from "react-router-dom";


function RBebidas() {

  return (
    <>
    <Header/>
    <div className={styles.Root}>
    <div className={styles.Voltar}><Link to="/"><img className={styles.Seta} src="./public/icons/seta-esquerda.png" alt="" /> Voltar</Link></div>
    <div className={styles.imagens}>
      <div className={styles.Img1}> <Link to="/ReceitasBebidas"><img className={styles.Img} src="./public/images/drinks.png" alt="" /><button className={styles.Botao}>Drinks</button></Link></div>
      <div className={styles.Img2}><Link to="/ReceitasBebidas"><img className={styles.Img} src="./public/images/bebidasalcool.png" alt="" /><button className={styles.Botao}>Sem álcool</button></Link></div>
    </div>
    <div className={styles.imagens}>
      <div className={styles.Img3}><Link to="/ReceitasBebidas"><img className={styles.Img} src="./public/images/drinkquente.png" alt="" /><button className={styles.Botao}>Quentes</button></Link></div>
      <div className={styles.Img4}><Link to="/ReceitasBebidas"><img className={styles.Img} src="./public/images/bebidagelada.png" alt="" /><button className={styles.Botao}>Geladas</button></Link></div>
    </div>
  </div>
  <Footer/>
   
  </>
 )
}

export default RBebidas