import style from './Register.module.scss'

interface RegisterInputProps{
    id?: string
    PH: string | undefined,
    Label: String, 
    type?: string,
    Obrigatorio: boolean,
    valor: string,
    aoAlterado: (novoValor: string) => void
}


export default function RegisterInput({PH, Label, id, type ,Obrigatorio, valor, aoAlterado}: RegisterInputProps){
    const aoDigitado = (evento:any) =>{
        aoAlterado(evento.target.value)
      }
return(
    <div className={style.RegisterInput} id={id}>
        <label htmlFor="">{Label}</label>
        <input type={type} placeholder={PH} value={valor} onChange={aoDigitado} required={Obrigatorio} />
    </div>
)
}