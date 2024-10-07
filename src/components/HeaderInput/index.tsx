import styles from './styles.module.scss'

interface HeaderInputProps{
    Titulo: string
}


export default function HeaderInput({Titulo} : HeaderInputProps){

    return(
            <div className={styles.titleSection}>
              <h2>{Titulo}</h2>
            </div>
    )
}