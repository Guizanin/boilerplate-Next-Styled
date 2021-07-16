import styled, { css, keyframes } from 'styled-components'

export const Container = styled.div`
  position: relative;
`

const showDesk = keyframes`
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
`

export const Content = styled.div`
  background: var(--blue-600);
  max-width: 414px;
  width: 100%;
  position: fixed;
  top: 83px;
  left: 0;
  margin: 0 auto;
  z-index: 100;
  padding: 24px 29px 19px;
  transition: right 0.4s linear;
  z-index: 100;
  box-shadow: 4px 0px 30px rgba(0, 0, 0, 0.15);
  right: ${({ active }) =>
    active
      ? css`
            0;
          `
      : css`
            -300%;
          `};

  @media (min-width: 980px) {
    top: 95px;
    right: -10%;
    max-width: 607px;
    padding: 27px 35px 37px;
    animation: ${showDesk} 0.2s linear;
    display: ${({ active }) =>
      active
        ? css`
            block;
          `
        : css`
            none;
          `};
  }
`

export const ButtonClose = styled.button`
  background: transparent;
  border: none;
  position: absolute;
  right: 0px;
  top: 0px;

  svg {
    fill: var(--white-100);

    @media (min-width: 980px) {
      width: 31px;
      height: 31px;
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
  font-size: 18px;
  line-height: 109.68%;
  margin-bottom: 25px;

  @media (min-width: 980px) {
    font-size: 21px;
    margin-bottom: 36px;
  }

  .highlight {
    color: var(--orange-300);
    font-weight: 700;
  }
`

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  @media (min-width: 980px) {
    flex-direction: row;
  }

  .wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 14px;
    width: 100%;
    margin-right: 0;

    @media (min-width: 980px) {
      margin-bottom: 0;
      margin-right: 15px;
    }
  }

  .send-button {
    height: 44px;
    max-width: 157px;

    span {
      color: var(--white-070);
      font-style: normal;
      font-weight: bold;
      font-size: 13px;
      line-height: 87.68%;
      margin-right: 6px;
    }
  }
`

export const Input = styled.input`
  color: var(--gray-500);
  font-family: var(--main-font-family);
  font-style: normal;
  font-weight: 300;
  font-size: 12px;
  line-height: 87.68%;
  background: #ffffff;
  height: 37px;
  padding: 0 12px;
  border: 0;
  border-radius: 12px;
  width: 100%;

  &:first-child {
    margin-right: 10px;
  }

  &:focus,
  &:focus-visible {
    outline: none;
  }
`
