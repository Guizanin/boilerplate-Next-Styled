import styled, { css } from 'styled-components'

export const ContainerFaq = styled.section`
  padding: 67px 23px 72px;
  margin-bottom: 63px;
  background: var(--white);

  @media (max-width: 1162px) {
    padding: 29px 0 0;
  }
`

export const Title = styled.h3`
  font-style: normal;
  font-weight: 700;
  font-size: 55px;
  line-height: 109.68%;
  max-width: 577px;
  width: 100%;
  color: var(--orange-150);

  .highlight {
    color: var(--blue-600);
    font-weight: 900;
  }

  @media (max-width: 1162px) {
    font-size: 45px;
    max-width: 385px;
    padding: 0 15px;
    zoom: 0.86;
  }
`

export const ContentAccordions = styled.section`
  max-width: 1004px;
  width: 100%;
  margin: 68px auto 0;

  @media (max-width: 1162px) {
    margin: 36px auto 0;
  }
`
export const Accordion = styled.div`
  cursor: pointer;
  background: var(--blue-600);
  border-radius: 15px;
  margin: 10px 0;
  transition: background 0.1s linear;

  svg {
    transform: rotate(0);
  }

  ${(props) =>
    props.active === true &&
    css`
      background: var(--orange-150);
      svg {
        transform: rotate(-90deg);
      }
      header ~ div {
        display: flex;
        padding: 0 57px 36px 28px;
      }
    `}
`

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: var(--white);
  height: 83px;
  padding: 0 28px;

  .text {
    font-size: 18px;

    @media (max-width: 1100px) {
      font-size: 14px;
      line-height: 16px;
    }
  }

  svg {
    width: 17px;
    height: 9px;

    path {
      fill: var(--white);
    }

    @media (max-width: 1100px) {
      width: 13px;
    }
  }

  strong {
    font-weight: 900;
  }
`

export const Content = styled.div`
  display: none;
  color: var(--white);
  font-size: 15px;
  line-height: 20.5px;

  .list {
    margin-top: 5px;

    li {
      & ~ li {
        margin-top: 3px;
      }
    }
  }

  @media (max-width: 1100px) {
    font-size: 13px;
    line-height: 16px;
  }
`
