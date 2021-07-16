import styled, { css } from 'styled-components'

const bestOffer = 'best-offer'

export const Container = styled.div`
  position: relative;
`

export const Content = styled.div`
  background: ${({ typeModal }) =>
    typeModal === bestOffer
      ? 'var(--orange-linear-gradiant)'
      : 'var(--blue-600)'};
  max-width: 414px;
  width: 100%;
  position: fixed;
  left: 0;
  right: 0;
  margin: 0 auto;
  z-index: 100;
  padding: 26px 29px 34px;
  border-top-left-radius: 63px;
  border-top-right-radius: 63px;
  transition: bottom 0.4s linear;
  z-index: 9999;
  box-shadow: 4px 0px 30px rgba(0, 0, 0, 0.15);
  bottom: ${({ active }) =>
    active
      ? css`
            0;
          `
      : css`
            -100%;
          `};

  @media (min-width: 980px) {
    left: auto;
    max-width: 799px;
    padding: 95px 60px 55px;
    border-top-left-radius: 83px;
    border-top-right-radius: 83px;
  }
`

export const ButtonClose = styled.button`
  background: transparent;
  border: none;
  position: absolute;
  right: 0px;
  top: 0px;

  @media (min-width: 980px) {
    top: -60px;
    right: -20px;
  }

  svg {
    fill: var(--white-100);

    @media (min-width: 980px) {
      width: 32px;
      height: 32px;
    }

    path {
      fill: var(--white-100);
    }
  }
`

export const Title = styled.p`
  color: var(--white-040);
  font-family: var(--main-font-family);
  font-style: normal;
  font-weight: 500;
  font-size: 26px;
  line-height: 104.18%;
  text-align: left;
  width: 300px;
  margin-bottom: 24px;

  @media (min-width: 980px) {
    font-size: 45px;
    margin: 0;
    margin-bottom: 20px;
    text-align: center;
    width: auto;
  }

  b {
    font-weight: 700;
  }
`

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 25px;

  .icon {
    width: 41px;
    height: 41px;
    align-self: center;

    @media (min-width: 980px) {
      width: 52px;
      height: 52px;
    }
  }

  picture {
    text-align: left;
  }

  .chat-mobile {
    path:first-child {
      fill: ${({ typeModal }) =>
        typeModal === bestOffer ? 'var(--blue-600)' : 'var(--white)'};
    }
  }

  .phone-mobile {
    path:first-child {
      fill: ${({ typeModal }) =>
        typeModal === bestOffer ? 'var(--blue-600)' : 'var(--white)'};
    }

    path:last-child {
      fill: var(--white);
    }

    @media (min-width: 980px) {
      display: none;
    }
  }

  .icon-arrow {
    width: 26px;
    height: 16px;
    align-self: flex-end;

    @media (min-width: 980px) {
      width: 35px;
      height: 21px;
      align-self: center;
    }

    path {
      fill: var(--white);
      stroke: var(--white);
    }
  }
`

export const Stake = styled.div`
  height: 114px;
  width: 2px;
  background: #27e7e5;
  margin: 0 5px;
  display: none;

  @media (min-width: 980px) {
    display: block;
  }
`
