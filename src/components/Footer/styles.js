import styled from 'styled-components'

export const FooterContainer = styled.footer`
  background: var(--white-100);
  padding-top: 33px;

  @media (min-width: 815px) {
    height: 556px;
    padding-top: 98px;

    .wrapper {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      height: 100%;
    }
  }
`

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 59px;

  @media (min-width: 815px) {
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
  }

  .logo-container {
    margin-bottom: 44px;

    svg {
      width: 147px;
    }

    @media (min-width: 815px) {
      transform: translateY(-10px);

      svg {
        width: 224px;
      }
    }
  }

  .block-list {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    @media (min-width: 815px) {
      max-width: 900px;
      width: 100%;
      margin-left: 60px;
      flex-direction: row;
      align-items: flex-start;
      justify-content: space-between;
      flex-wrap: wrap;
    }
  }

  .item-block {
    margin-bottom: 32px;

    &:last-of-type {
      margin-bottom: 0;
    }
  }

  .link-bold {
    color: var(--blue-600);
    font-family: var(--main-font-family);
    font-style: normal;
    font-weight: 400;
    font-size: 13px;
    line-height: 18px;

    @media (min-width: 815px) {
      font-size: 15px;
    }
  }
`

export const SocialContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 70px;
  @media (min-width: 815px) {
    margin-bottom: 155px;
  }

  .social-links {
    margin: 15px 0 17px;

    @media (min-width: 815px) {
      margin: 22px 0 15px;
    }

    .icon {
      margin-right: 8px;
      width: auto;
    }

    img {
      width: auto;
    }
  }
`

export const Border = styled.div`
  display: none;
  width: 53px;
  height: 1px;
  background: var(--blue-600);
  margin-bottom: 21px;

  @media (min-width: 815px) {
    display: block;
  }
`

export const Title = styled.h3`
  color: var(--blue-600);
  font-family: var(--main-font-family);
  font-style: normal;
  font-weight: 700;
  line-height: 109.68%;
  text-align: center;
  font-size: 21px;
  margin-bottom: 13px;

  @media (min-width: 815px) {
    font-size: 23px;
    text-align: left;
  }
`

export const Text = styled.p`
  color: var(--blue-600);
  font-family: var(--main-font-family);
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 18px;
  text-align: center;

  @media (min-width: 815px) {
    font-size: 15px;
    text-align: left;
  }

  b {
    font-weight: 900;
  }
`

export const SecondText = styled.p`
  color: var(--blue-600);
  font-family: var(--main-font-family);
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 18px;
  text-align: center;
  max-width: 240px;

  b {
    font-weight: 900;
  }

  @media (min-width: 815px) {
    text-align: left;
    max-width: unset;
  }
`
