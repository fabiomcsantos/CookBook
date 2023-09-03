import React from 'react'
import styles from './Footer.module.css'


function Footer() {

  return (
    <div className={styles.Root}>
     <footer className={styles.Footer}>
        <div className={styles.Conteudo}>
          <h1 className={styles.TitleH1}>Quem Somos</h1>
          <p className={styles.TitleP}>Somos uma equipe que está trabalhando para trazer até você um site de receitas único. Nosso objetivo é oferecer uma variedade de receitas deliciosas e inspiradoras para atender todos os gostos e níveis de habilidade na cozinha. Queremos simplificar a arte da culinária, fornecendo instruções passo a passo e dicas práticas,  esteja você começando ou mestre na cozinha, nosso site será um recurso útil e inspirador para criar pratos incrivéis e memoráveis. Fique atento para atualizações e lançamento em breve!</p>
        </div>
        <div className={styles.LinkSocial}>
          <a href="#" className={styles.Social}><img className={styles.Icons} src="./public/icons/instagram.png" alt="" /></a>
          <a href="#" className={styles.Social}><img className={styles.Icons1} src="./public/icons/email.png" alt="" /></a>
        </div>     
       
     </footer>
    </div>
  )
}


export default Footer