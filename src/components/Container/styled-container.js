import styled from 'styled-components'

export const Main = styled.main`
  padding: 50px 15%;
  margin: 25px 32px;

  @media (max-width: 767px) {
    padding: 50px 0 0 0;
  }
`

export const List = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-gap: 10px;
`
