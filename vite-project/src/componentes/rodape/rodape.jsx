import style from './rodape.module.css'

const Rodape = (props) => {
    const {Nome} = props
    const Ano = new Date().getFullYear()

    return (
        <div className={style.Rodape}>
            <p>React Basico - {Ano} - Desenvolvido por {Nome}</p>
        </div>
    )
}

export { Rodape }