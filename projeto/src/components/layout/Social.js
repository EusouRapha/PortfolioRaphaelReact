import {AiOutlineMail} from "react-icons/ai";
import styles from "./Social.module.css"

function Social(){
    return(
        <article className={styles.article_container}>
            <section>
            <h1>Vamos conversar</h1>
            <h1>Me mande uma mensagem no</h1>
            <h1>formulario ao lado </h1>
            <p>Qualquer duvida, estou a disposição</p>            
            </section>
            <AiOutlineMail></AiOutlineMail>

        </article>
        


    )

}

export default Social;