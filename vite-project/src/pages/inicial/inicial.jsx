import style from './inicial.module.css'
import { FormCriarTarefa, ListaDeTarefas } from "../../componentes"

const Inicial = () => {
    return (
        <div className={style.Inicial}>
        <FormCriarTarefa/>
        <ListaDeTarefas/>
        </div>
    )
}

export { Inicial }