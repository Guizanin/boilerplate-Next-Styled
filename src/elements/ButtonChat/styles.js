import styled from 'styled-components'

const value = (props) => `${props.mediaQuery}px`

export const ButtonElement = styled.button`
  background: transparent;
  border: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;

  @media (min-width: ${value}) {
    flex-direction: row;
    align-items: center;
  }

  .text {
    color: var(--white);
    font-family: var(--main-font-family);
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 109.68%;
    margin: 5px 0 10px;

    @media (min-width: ${value}) {
      font-size: 28px;
      margin: 0;
      margin-left: 19px;
      margin-right: 12px;
    }
  }
`
