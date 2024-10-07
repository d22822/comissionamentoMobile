import { DetailedHTMLProps, SelectHTMLAttributes } from 'react'
import styles from './styles.module.scss'

interface InputProps extends DetailedHTMLProps<SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>
 { 
  Label: string,
  options: { value: any, label: string }[],
  id?: string,
  Obrigatorio: boolean,
  valor: string,
  aoAlterado: (novoValor: string) => void
 }

export default function DropDown({ Label, options, id, Obrigatorio, valor, aoAlterado}: InputProps) {
  const aoDigitado = (evento:any) =>{
    aoAlterado(evento.target.value)
  }
  return (
    <div className={styles.DropDown} id={id}>
      <label>{Label}</label>
      <select value={valor} onChange={aoDigitado} required={Obrigatorio} >
        {options.map((option) => (
          <option className={styles.option} key={option.label} value={option.value}>{option.label}</option>))}
      </select>
    </div>
  )
}