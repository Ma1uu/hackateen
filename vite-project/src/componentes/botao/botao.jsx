import { TIPOS_BOTAO } from './constantes'
import style from './botao.module.css'

const Botao = (props) => {
    const { texto, tipo=TIPOS_BOTAO.SECUNDARIO, ...outrasprops} = props
    return (
        <button className={style.Botao} 
        tipo={tipo} 
        {...outrasprops}>
        {texto}
        </button>
    )
}

export { Botao }