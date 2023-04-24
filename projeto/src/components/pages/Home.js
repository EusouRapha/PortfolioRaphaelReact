import Aside from "../layout/Aside"
import Article from "../layout/Article"
import styles from './Home.module.css'


function Home(){
    return(
        <section className={styles.home_container}>
            <Aside></Aside>
            <Article></Article>
        </section>


    ) 
}

export default Home