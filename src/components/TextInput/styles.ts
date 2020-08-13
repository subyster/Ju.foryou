/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import styled, { css } from 'styled-components';

interface InputColorProps {
  isFocused: boolean;
  isFilled: boolean;
  isErrored: boolean;
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Title = styled.h1`
  margin: 0 0 0.8rem 0.8rem;

  font-size: 1.4rem;
  color: var(--dark-purple-ju);
`;

export const InputBox = styled.div<InputColorProps>`
  background: var(--white);
  border-radius: 0.8rem;
  padding: 1.6rem;
  max-width: 47.5rem;
  width: 100%;

  border: 2px solid var(--white);
  box-shadow: 1px 2px 4px var(--purple-ju);
  display: flex;
  align-items: center;

  input {
    background: transparent;
    width: 100%;
    border: 0;
    font-size: 1.8rem;
    color: var(--dark1);
  }

  svg {
    margin-right: 2.4rem;
    color: var(--purple-ju);
  }

  ${props =>
    props.isErrored &&
    css`
      border-color: var(--red);
    `}

  ${props =>
    props.isFocused &&
    css`
      border-color: var(--dark-purple-ju);
      svg {
        color: var(--dark-purple-ju);
      }
    `}

  ${props =>
    props.isFilled &&
    css`
      svg {
        color: var(--dark-purple-ju);
      }
    `}
`;

export const Error = styled.div`
  margin-left: 1.6rem;

  svg {
    margin-right: 0;
  }
`;
