
import './App.css'
import {Cabecalho, Conteudo, Rodape} from './componentes'

function App() {
  return (
    <>
    <Cabecalho nomeUsuario="Malu" />
    <Conteudo>
      <h1>Titulo</h1>
      <p>Esse é o conteudo do app</p>
    </Conteudo>
    <Rodape Nome="Malu" />
    </>
  )
}

export {App}
