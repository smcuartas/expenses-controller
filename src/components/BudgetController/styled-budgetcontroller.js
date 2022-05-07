import styled from 'styled-components'

export const BCContainer = styled.div`
  display: block;
  padding: 50px;
  margin: 50px 15% -70px 15%;
  background: white;
  border-radius: 5px;
  box-shadow: 0 3px 5px rgba(0, 0, 0, 0.2);
  display: grid;
  grid-template-columns: 220px 1fr;
  grid-gap: 50px;
  text-align: initial;

  & div {
    margin: auto 0;
  }

  @media (max-width: 767px) {
    grid-template-columns: repeat(1, 1fr);
    margin: 30px 0 -70px 0;

    > div:nth-child(1) {
      padding: 0 80px;
    }
  }
`

export const ResetBtn = styled.button`
  display: block;
  width: 100%;
  margin-bottom: 16px;
  background: #cc0700;
  border: none;
  border-radius: 0;
  color: white;
  text-transform: uppercase;
  letter-spacing: 2px;
  padding: 10px 5px;
  cursor: pointer;
  transition-duration: 0.3s;

  :hover {
    background: #750400;
  }
`

export const InternalRow = styled.div`
  display: grid;
  grid-template-columns: 30% 1fr;

  & p:last-child {
    text-align: right;
  }
`
