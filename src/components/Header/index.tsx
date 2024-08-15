import { BtnTema, Cabecalho } from './styles'

type Props = {
  trocaTema: () => void
}

const Header = (props: Props) => (
  <Cabecalho>
    <h1>EBAC Jobs</h1>
    <BtnTema onClick={props.trocaTema}>Trocar tema</BtnTema>
  </Cabecalho>
)

export default Header
