import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 31.6rem;
  height: 37.8rem;
  background: var(--white);
  box-shadow: 1px 2px 4px var(--primary);
  border-radius: 2.4rem;
  cursor: pointer;

  #upload {
    object-fit: cover;
    width: 31.6rem;
    height: 37.8rem;
    border-radius: 2.4rem;
  }

  div {
    border: 2px dashed var(--dark-primary);
    transition: border-color 0.3s;
    height: 30.24rem;
    width: 25.28rem;
    border-radius: 2.4rem;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;

    svg {
      color: var(--dark-primary);
      transition: color 0.3s;
    }

    span {
      font-size: 1.6rem;
      line-height: 1.9rem;
      color: var(--dark1);
      margin: 2.4rem;
      transition: opacity 0.3s;
    }
  }

  &:hover {
    div {
      border-color: var(--primary);

      svg {
        color: var(--primary);
      }

      span {
        opacity: 0.6;
      }
    }
  }
`;
