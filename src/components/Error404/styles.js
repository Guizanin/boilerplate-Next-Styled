import styled from 'styled-components'

export const Container = styled.div`
  background: var(--white);
	height: 100vh;
	width: 100vw;
`

export const Content = styled.div`
  position: relative;
  top: 25%;
  align-items: center;
  display: flex;
	flex-direction: column;
	justify-content: center;
`

export const Title = styled.h3`
  color: var(--black);
  font-family: var(--main-font-family);
  font-size: 22px;
  text-align: center;

  strong {
    color: var(--black);
    font-size: 80px;
    display: block;
  }
`

export const LinkElement = styled.a`
  color: var(--black);
  cursor: pointer;
  font-family: var(--main-font-family);
  margin-top: 25px;
  display: flex;
  align-items: center;
  
  span {
    text-decoration: underline;
    margin-left: 10px;
  }

  .icon {
    transform: rotate(90deg);

    path {
      fill: var(--black);
    }
  } 
`
