import { ThemeProvider } from 'styled-components'
import Header from './components/Header'
import Hero from './components/Hero'
import ListaVagas from './containers/ListaVagas'
import { Container, EstiloGlobal } from './styles'
import temaPrincipal from './themes/principal'
import temaSecundario from './themes/secundario'
import { useState } from 'react'

function App() {
  const [coresTemaSecundario, setCoresTemaSecundario] = useState<boolean>(false)

  const trocaTema = () => {
    setCoresTemaSecundario(!coresTemaSecundario)
  }

  return (
    <ThemeProvider theme={coresTemaSecundario ? temaSecundario : temaPrincipal}>
      <EstiloGlobal />
      <Header trocaTema={trocaTema} />
      <Hero />
      <Container>
        <ListaVagas />
      </Container>
    </ThemeProvider>
  )
}

export default App
