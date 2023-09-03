import React from 'react'
import styles from './RSalgada.module.css'
import Header from '../../components/header/index'
import Footer from '../../components/footer/index'
import {Link} from 'react-router-dom'



function RSalgada() {

  return (
    <>
    <Header/>
  <div className={styles.Root}>
    <div className={styles.Voltar}><Link to='/'><img className={styles.Seta} src="./public/icons/seta-esquerda.png" alt="" /> Voltar</Link></div>
    <div className={styles.imagens}>
      <div className={styles.Img1}><Link to='/ReceitasSalgadas'><img className={styles.Img} src="./public/images/salgadopratico.png" alt="" /><button className={styles.Botao}>Práticas</button></Link></div>
      <div className={styles.Img2}><Link to='/ReceitasSalgadas'><img className={styles.Img} src="./public/images/salgadoveg.png" alt="" /><button className={styles.Botao}>Vegetárianas</button></Link></div>
    </div>
    <div className={styles.imagens}>
      <div className={styles.Img3}><Link to='/ReceitasSalgadas'><img className={styles.Img} src="./public/images/salgadoquente.png" alt="" /><button className={styles.Botao}>Quentes</button></Link></div>
      <div className={styles.Img4}><Link to='/ReceitasSalgadas'><img className={styles.Img} src="./public/images/salgadofrio.png" alt="" /><button className={styles.Botao}>Frias</button></Link></div>
    </div>
  </div>
   <Footer/>
  </>
 )
}

export default RSalgada