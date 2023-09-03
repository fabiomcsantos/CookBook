import React from "react";
import Header from "../../components/Header/index";
import Footer from "../../components/footer/index";
import styles from "../Cadastrar/cadastrar.module.css";
import { Link } from "react-router-dom";


function Cadastrar() {

    return (
      <div>
      <Header/>
      <div className={styles.Root}>
        <div className={styles.Container}>
          <div className={styles.Cadastro}>
          <h1 className={styles.TitleH1}>Cadastro</h1>
                      <form >
                          <div >
                              
                              <input className={styles.Usuario} type="text" id="name" name="name"placeholder="Nome" />
                         
                              <input className={styles.Usuario}  type="text" id="email" name="email" placeholder="Email" />
                       
                              <input className={styles.Usuario} type="text" id="telefone" name="telefone" placeholder="Telefone"/>
                          
                              <input className={styles.Senha} type="password" id="senha" name="senha" placeholder="Senha"/>
                          </div>
                          <Link to="/Confirm"><button className={styles.Button} type="submit"> Cadastrar </button><br /></Link>
  
                      </form>
          </div>
        </div>
      <Footer/>
    </div>
    </div>
   )
  }
  
  export default Cadastrar