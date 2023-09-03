import React, {useEffect, useState, useRef} from 'react'
import styles from './home.module.css'
import Header from '../../components/header/index';
import Footer from '../../components/Footer/index';
import {motion} from 'framer-motion';
import banner1 from '../../../public/images/banner1.png'
import banner2 from '../../../public/images/banner2.png'
import banner3 from '../../../public/images/banner3.png'
import { Link } from 'react-router-dom';

const images = [banner1, banner2, banner3]


function Home() {

  const rotativo = useRef();
  const [width, setWidth] = useState(0)


  useEffect (() => {
    //console.log(rotativo.current?.scrollWidth, rotativo.current?.offsetWidth)
    setWidth(rotativo.current?.scrollWidth - rotativo.current?.offsetWidth)
  }, [])

  return (
    <div>
    <Header/>
    <div className={styles.Root}>
    <div className={styles.Banner}>
      <motion.div ref={rotativo} className={styles.Rotativo} whileTap={{cursor: "grabbing"}}>
        <motion.div className={styles.inner} drag="x" dragConstraints={{ right:0, left: - width}}>

          {images.map(image => (
            <motion.div className={styles.item} key={image}>
              <img src={image} alt='Imagens banner'/>
            </motion.div>
          ) )}

        </motion.div>
      </motion.div>
    </div>
    <div className={styles.Bot}> <button></button> <button></button> <button></button> </div>
    <div className={styles.imagens}>
      <div className={styles.Img1}> <Link to="/RSalgadas"> <img className={styles.Img} src="./public/images/salgado.png" alt="" /><button className={styles.Botao}>Salgadas</button></Link></div>
      <div className={styles.Img2}> <Link to="RDoces"> <img className={styles.Img} src="./public/images/doces.png" alt="" /><button className={styles.Botao}>Doces</button></Link></div>
      <div className={styles.Img3}><Link to="RBebidas">  <img className={styles.Img} src="./public/images/bebidas.png" alt="" /><button className={styles.Botao}>Bebidas</button></Link></div>
    </div>
  </div>
    <Footer/>
  </div>
 )
}

export default Home