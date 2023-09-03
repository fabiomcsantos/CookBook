import React from 'react';
import Header from '../../components/header/index';
import Footer from '../../components/Footer/index';
import styles from "./login.module.css";
import { Link } from 'react-router-dom';

function Login() {

    return (
        <div>
        <Header/>
        <div className={styles.Root}>
          <div className={styles.Container}>
            <div className={styles.Login}>
            <h1 className={styles.TitleH1}>Login</h1>
                        <form >
                            <div >
                                
                                <input className={styles.Usuario} type="text" id="email" name="email"placeholder="E-mail" />
                            
                                <input className={styles.Senha} type="password" id="senha" name="senha" placeholder="Senha"/>
                            </div>
                            <br />
                            <br />
                            <br />
                            <Link to="/"><button className={styles.Button} type="submit"> Login </button><br /></Link>
                            <br />
                            <br />
                            <Link><div className={styles.links}>Esqueceu a senha</div></Link>
                            <br />
                            <br />
                            <Link to={"/Cadastrar"}><div className={styles.links}>Cadastrar</div></Link>
    
    
                        </form>
            </div>
          </div>
        <Footer/>
      </div>
      </div>
     )
    }
  
  export default Login