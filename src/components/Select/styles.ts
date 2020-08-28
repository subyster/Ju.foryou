/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import styled, { css } from 'styled-components';

interface ContainerProps {
  isFocused: boolean;
  isErrored: boolean;
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  flex-direction: column;
  width: 100%;

  h1 {
    font-size: 1.4rem;
    color: var(--dark-primary);
  }

  select {
    width: 100%;
    padding: 1.6rem;
    font-size: 1.8rem;

    background: var(--white);
    box-shadow: 1px 2px 4px var(--primary);
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
    props.isErrored &&
    css`
      border-color: var(--red);
    `}

  ${props =>
    props.isFocused &&
    css`
      select {
        border-color: var(--dark-primary);
      }
    `}
`;

export const Label = styled.header`
  display: flex;
  align-items: center;
  margin: 0 0 0.8rem 0.8rem;
`;

export const Error = styled.div`
  margin-left: 1.2rem;

  svg {
    margin-right: 0;
  }
`;
