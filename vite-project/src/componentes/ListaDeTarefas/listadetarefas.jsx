import style from './listadetarefas.module.css'

const ListaDeTarefas = () => {
    return (
        <div className={style.ListaDeTarefas}>
            <ul>
                <li>Tarefa 1</li>
                <button texto="-" tipo="TIPOS_BOTAO.secundario"></button>
                <li>Tarefa 2</li>
                <button texto="-" tipo="TIPOS_BOTAO.secundario"></button>
                <li>Tarefa 3</li>
                <button texto="-" tipo="TIPOS_BOTAO.secundario"></button>
            </ul>
        </div>
    );
}

export { ListaDeTarefas }