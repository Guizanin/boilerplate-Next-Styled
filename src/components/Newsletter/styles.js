import styled from 'styled-components'

export const Container = styled.div`
  background: var(--blue-100);
  padding: 40px 16px 37px;
  display: flex;
  align-items: center;

  @media (min-width: 780px) {
    padding: 0;
    height: 213px;
  }
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  @media (min-width: 780px) {
    flex-direction: row;
    justify-content: space-between;
  }
`

export const Text = styled.p`
  color: var(--white-070);
  font-family: var(--main-font-family);
  font-size: 45px;
  font-style: normal;
  font-weight: 700;
  line-height: 109.68%;
  margin-bottom: 21px;

  @media (min-width: 780px) {
    font-size: 55px;
    margin-bottom: 0;
  }

  .highlight {
    color: var(--yellow-200);
    font-weight: 700;
  }
`
