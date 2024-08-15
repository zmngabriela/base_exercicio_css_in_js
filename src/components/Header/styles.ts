import styled from 'styled-components'

export const Cabecalho = styled.header`
  background-color: ${(props) => props.theme.corSecundaria};
  color: ${(props) => props.theme.corPrincipal};
  text-align: center;
  padding: 24px calc((100vw - 1024px) / 2);
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const BtnTema = styled.button`
  background-color: ${(props) => props.theme.corPrincipal};
  color: ${(props) => props.theme.corSecundaria};
  padding: 8px 16px;
  text-decoration: none;
  font-weight: bold;
  font-size: 14px;
  border-radius: 8px;
  border: none;
`
