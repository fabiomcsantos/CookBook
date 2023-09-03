import React from 'react'
import styles from './raberta.module.css'
import Footer from '../../components/Footer/index'
import Header from '../../components/header/index'
import { Link } from "react-router-dom";



function RAberta() {

  return (
    <>
    <Header/>
<div className={styles.Root}>
<div className={styles.Voltar}><Link to="/"><img className={styles.Seta} src="./public/icons/seta-esquerda.png" alt="" /> Voltar</Link></div>
   
   <div className={styles.geral}>
      
        <div className={styles.conteudo}>
            <img className={styles.foto} src="./public/images/ossobuco.jpeg" alt=""/>
            <div className={styles.receita}> 
                    <h2 className={styles.TitleH2}>Ingredientes</h2>
                        <ul className={styles.TextUl} >
                          <li>2 colheres de sopa de azeite extra virgem</li>
                          <li> 2 kg de ossobuco fresco (não usar carne congelada)</li>
                          <li>2 cebolas médias em rodelas</li>
                          <li> 1 pimentão verde ou vermelho</li>
                          <li> 1 colher de sopa de alho picado ou triturado</li>
                          <li>4 tomates picados e sem sementes</li>
                          <li>1 lata (340 g) de molho de tomate pronto (não usar extrato de tomate)</li>
                          <li>1 e 1/2 colheres de sálvia desidratada (pode ser louro também)</li>
                          <li>pimenta-do-reino branca a gosto</li>
                          <li> sal a gosto</li>
                        </ul>
               
            </div>
        </div>
       
       
       <div className={styles.conteudo}>
           <div className={styles.CaixaImg}><video controls="controls" autoPlay="none" className={styles.Img}/></div>
           <div className={styles.preparo}>
                <h2 className={styles.TitleH2}>Preparo</h2>
       
                   <p className={styles.TitleP}>
                       1. O prato deverá ser feito diretamente em uma panela de pressão, onde adiciona-se inicialmente o azeite. <br/>

                       2. Os ingredientes deverão ser todos divididos em 2 porções e colocados em camadas na seguinte ordem: 
                       ossobuco, cebola, alho, tomate, pimentão, molho de tomate, temperos (sálvia, pimenta-do-reino branca e sal). Repetir esta ordem novamente. <br/>

                       3. Fechar a panela e levar ao fogo alto até o início da pressão (panela começa a chiar). <br/>

                       4. Abaixar o fogo e cozinhar por 50 a 60 minutos (cuidado para não ultrapassar este tempo em demasia). <br/>

                       5. Desligar o fogo e abrir a panela somente após a saída natural da pressão (cerca de 15 minutos). <br/>

                       6. O ideal é servir o ossobuco acompanhado de arroz branco e uma bela polenta ou purê de batata. <br/>

                    </p>
           </div>
       </div>
   </div>
   </div>
   <Footer/>
   </>
 )
}

export default RAberta