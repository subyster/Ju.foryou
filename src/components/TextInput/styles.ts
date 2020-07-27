import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 475px;
`;

export const Title = styled.h1`
  margin: 0 0 8px 8px;

  font-size: 14px;
  color: var(--dark-purple-ju);
`;

export const InputBox = styled.div`
  height: 64px;
  width: 100%;
  padding: 0 24px;

  background: var(--white);
  box-shadow: 1px 2px 4px var(--purple-ju);
  border-radius: 8px;
  display: flex;
  align-items: center;

  input {
    background: transparent;
    flex: 1;
    border: 0;
    font-size: 18px;
    color: var(--dark1);
  }
`;
