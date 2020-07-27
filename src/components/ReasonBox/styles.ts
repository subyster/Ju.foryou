import styled from 'styled-components';

export const Container = styled.div`
  margin: 0 6px;
  width: 256px;
  height: 386px;
  background: var(--pink-ju);
  border-radius: 32px;
  box-shadow: 1px 2px 4px var(--purple-ju);

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.div`
  max-width: 192px;

  margin: 24px 0;
  font-style: italic;
  font-weight: bold;
  font-size: 18px;
  text-align: center;

  color: var(--dark1);
`;

export const Content = styled.div`
  width: 230px;
  height: 262px;

  font-weight: 500;
  font-size: 18px;
  line-height: 21px;
  display: flex;
  align-items: center;
  text-align: center;

  color: var(--dark-purple-ju);
`;
