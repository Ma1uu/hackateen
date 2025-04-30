import { TIPOS_BOTAO } from './constantes'
import style from './botao.module.css'

const Botao = (props) => {
    const { texto, tipo=TIPOS_BOTAO.PRIMARIO, ...outrasprops} = props
    return (
        <button className={style.Botao} 
        type={tipo} 
        {...outrasprops}>
        {texto}
        </button>
    )
}

export { Botao }