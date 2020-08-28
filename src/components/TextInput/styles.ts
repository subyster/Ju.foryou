/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import styled, { css } from 'styled-components';

import Tooltip from '../Tooltip';

interface InputColorProps {
  isFocused: boolean;
  isFilled: boolean;
  isErrored: boolean;
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.header`
  display: flex;
  align-items: center;
  margin: 0 0 0.8rem 0.8rem;
`;

export const Title = styled.h1`
  font-size: 1.4rem;
  color: var(--dark1);
`;

export const Error = styled(Tooltip)`
  height: 1.2rem;
  margin-left: 1.2rem;

  svg {
    margin-right: 0;
  }

  span {
    background: var(--red);

    &::before {
      border-color: var(--red) transparent;
    }
  }
`;

export const InputBox = styled.div<InputColorProps>`
  background: var(--white);
  border-radius: 0.8rem;
  padding: 1.6rem;
  max-width: 47.5rem;
  width: 100%;

  border: 2px solid var(--white);
  box-shadow: 1px 2px 4px var(--primary);
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
    color: var(--primary);
  }

  ${props =>
    props.isErrored &&
    css`
      border-color: var(--red);
    `}

  ${props =>
    props.isFocused &&
    css`
      border-color: var(--dark-primary);
      svg {
        color: var(--dark-primary);
      }
    `}

  ${props =>
    props.isFilled &&
    css`
      svg {
        color: var(--dark-primary);
      }
    `}
`;
