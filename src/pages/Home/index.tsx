import styles from './styles.module.scss';
import logo from '../../assets/svg/LOGO-White.svg'
import { useEffect } from 'react';
import pdf from "../../pdf/Lista2- Manipulação de Arquivos(1).pdf"
import { Footer } from '../../components/Footer';
import { useParams } from 'react-router-dom';

export default function Home() {

    const {tag} = useParams() 
    const openFile = (filePath: string) => {
        const a = document.createElement('a');
        a.href = filePath;
        a.target = '_blank';
        a.rel = 'noopener noreferrer';
        a.click();
    };

    
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
                <h1>{tag}</h1>
            </div>

            <div className={styles.buttons}>
                <button onClick={() => openFile(pdf)}>Manual</button>
                <button>Desenho</button>
                <button onClick={() => {document.location.href ='/Protocolo'}}>Protocolo</button>
            </div>
            
            <Footer />
        </div>
    );
}
