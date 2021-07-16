import styled from 'styled-components'

export const Link = styled.a`
  background: var(--orange-linear-gradiant);
  border: 1px solid var(--orange-linear-gradiant);
  border-radius: 40px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  display: block;
  max-width: 219px;
  width: 100%;
  height: 61px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (min-width: 590px) {
    max-width: 296px;
    height: 77px;
  }

  span {
    color: var(--white);
    font-family: var(--second-font-family);
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 87.68%;
    letter-spacing: 1px;
    margin-right: 12px;

    @media (min-width: 590px) {
      font-family: var(--main-font-family);
      font-size: 24px;
    }
  }
`
