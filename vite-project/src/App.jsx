
import './App.css'
import {Cabecalho, Conteudo, Rodape} from './componentes'
import { Inicial } from './pages'

function App() {
  return (
    <>
    <Cabecalho nomeUsuario="Malu" />
    <Conteudo>
      <Inicial/>
    </Conteudo>
    <Rodape Nome="Malu" />
    </>
  )
}

export {App}
