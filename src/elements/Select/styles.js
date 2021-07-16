import styled, { css } from 'styled-components'

export const ContentSelect = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  border-radius: 19px;
  /* width: 228px; */
  height: 34px;
  border: solid 1px white;
  color: white;

  svg {
    &:first-child {
      position: absolute;
      left: 5px;
    }
    &:last-child {
      position: absolute;
      right: 10px;
    }
  }
  select {
    padding: 0 15px 0 30px;
    font-size: 18px;
    margin-left: 3px;
    width: 100%;
    option,
    optgroup {
      color: black;
    }
  }

  &.select-page {
    margin: 74px 0 0 34px;
    align-self: flex-end;
    @media (max-width: 1024px) {
      align-self: flex-start;
      margin-top: 35px;
    }
  }
`
