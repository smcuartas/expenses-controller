import styled from 'styled-components'

export const FilterContainer = styled.div`
  display: grid;
  grid-template-columns: 30% 1fr;
  grid-gap: 30px;
  background: white;
  border-radius: 5px;
  box-shadow: 0px 3px 5px rgb(0, 0, 0, 0.2);
  padding: 25px;
  margin-bottom: 50px;

  div {
    margin: auto 0;
  }

  div select {
    width: 100%;
    padding: 5px;
  }

  @media (max-width: 767px) {
    grid-template-columns: repeat(1, 1fr);
    grid-gap: 15px;
  }
`
