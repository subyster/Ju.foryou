/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import styled, { css } from 'styled-components';

interface ContainerProps {
  isFocused: boolean;
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  flex-direction: column;
  width: 100%;

  h1 {
    margin: 0 0 0.8rem 0.8rem;
    font-size: 1.4rem;
    color: var(--dark-purple-ju);
  }

  select {
    width: 100%;
    padding: 1.6rem;
    font-size: 1.6rem;

    background: var(--white);
    box-shadow: 1px 2px 4px var(--purple-ju);
    border: 2px solid var(--white);
    border-radius: 0.8rem;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    color: var(--dark1);
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
  }

  ${props =>
    props.isFocused &&
    css`
      select {
        border-color: var(--dark-purple-ju);
      }
    `}
`;
