import logoFacebook from '../../assets/svg/facebook.svg'
import logolinkedin from '../../assets/svg/linkedin.svg'
import logoInsta from '../../assets/svg/instagram.svg'
import styles from './styles.module.scss'

export function Footer(){
    return(
    <div className={styles.container}>  

        <footer className={styles.footer}>
        <section>
          <p>@ Copyright 2024 TSA Engenharia | Todos os direitos reservados </p>
        </section>
        <section>
          <ul>
            <li>
              <a href='https://facebook.com/TSA-Tecnologia-de-Sistemas-de-Automação/'>
                <img src={logoFacebook} alt="Logo facebook" />
              </a>
            </li>
            <li>
              <a href='https://linkedin.com/company/tsaengenharia/'>
                <img src={logolinkedin} alt="Logo linkedIn" />
              </a>
            </li>
            <li>
              <a href="https://instagram.com">
                <img src={logoInsta} alt="Logo Instagram" />
              </a>
            </li>
          </ul>
        </section>
      </footer>
      </div>  
    )
}
