import styled from 'styled-components';

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

export const InputBox = styled.div`
  height: 6.4rem;
  width: 100%;
  padding: 0 2.4rem;

  background: var(--white);
  box-shadow: 1px 2px 4px var(--purple-ju);
  border-radius: 0.8rem;
  display: flex;
  align-items: center;

  input {
    background: transparent;
    flex: 1;
    border: 0;
    font-size: 1.8rem;
    color: var(--dark1);
  }

  svg {
    margin-right: 2.4rem;
    color: var(--dark-purple-ju);
  }
`;
