/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import styled, { css } from 'styled-components';
import { animated } from 'react-spring';

interface ContainerProps {
  type?: 'success' | 'error' | 'info';
  hasDescription: boolean;
}

const toastTypeVariations = {
  info: css`
    background-color: var(--light-purple-ju);
    color: var(--dark-purple-ju);
  `,
  success: css`
    background-color: var(--light-green);
    color: var(--green);
  `,
  error: css`
    background-color: var(--light-red);
    color: var(--red);
  `,
};

export const Container = styled(animated.div)<ContainerProps>`
  width: 36rem;

  position: relative;
  padding: 1.6rem 3rem 1.6rem 1.6rem;
  border-radius: 0.8rem;
  box-shadow: 2px 2px 8px var(--purple-ju);

  ${props => toastTypeVariations[props.type || 'info']}

  display: flex;

  & + div {
    margin-top: 1rem;
  }

  > svg {
    margin: 0.4rem 1.2rem 0 0;
  }

  div {
    flex: 1;

    p {
      margin-top: 0.4rem;
      font-size: 1.4rem;
      opacity: 0.8;
      line-height: 2rem;
    }
  }

  button {
    position: absolute;
    right: 1.6rem;
    top: 1.6rem;
    opacity: 0.6;
    border: 0;
    background: transparent;
    color: inherit;
  }

  ${props =>
    !props.hasDescription &&
    css`
      align-items: center;

      svg {
        margin-top: 0;
      }
    `}
`;
