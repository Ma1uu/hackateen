import style from './formCriarTarefa.module.css'
import { Botao, CampoTexto, TIPOS_BOTAO, } from "../../componentes";

const FormCriarTarefa = () => {
  return (
    <form className={style.FormCriarTarefa}>
      <CampoTexto/>
      <Botao texto="+" tipo={TIPOS_BOTAO.PRIMARIO}/>
    </form>
  );
}

export { FormCriarTarefa }