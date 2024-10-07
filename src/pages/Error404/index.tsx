import styles from './styles.module.scss';
import logo from '../../assets/svg/LOGO-White.svg'
import { useEffect } from 'react';
import { Footer } from '../../components/Footer';


export default function Error404() {
    
    const handleScroll = () => {
        document.body.style.overflow = 'hidden';
    }
    
    useEffect(() => {
        handleScroll();
    }, [])
    return (

        <div className={styles.container}>
            <header>
                <img id={styles.logo} src={logo} alt="Logo" />
            </header>
            
            <div>   
                <h1>ERROR 404</h1>
                <h2>Not Found</h2>
            </div>
            
            <Footer />
        </div>
    );
}
