import styled from "styled-components"

const Top = styled.header`
  padding: .5em 2em;
  background-color: var(--primaria);
  display: flex;
  flex-direction: row;
  margin: 0;
  a {
    text-align: center;
    padding: .3em;
    margin: 0 .7em;
    min-width: 5em;
    background-color: var(--background);
    text-decoration: none;
    font-weight: bold;
    color: var(--destaque);
    text-transform: uppercase;
    /*border-radius: .3em;*/
    &:hover{
      background-color: var(--primaria);
      color: var(--background);
    }
  }
`

export {Top}