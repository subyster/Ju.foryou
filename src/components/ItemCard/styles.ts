import styled from 'styled-components';

export const Container = styled.div`
  width: 352px;
  height: 420px;
  margin-bottom: 96px;
  background: var(--white);
  box-shadow: 1px 2px 4px var(--purple-ju);
  border-radius: 24px;
  position: relative;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  img {
    max-width: 304px;
    max-height: 420px;
    position: absolute;
    overflow: hidden;
    text-align: center;
  }
`;

export const Info = styled.div`
  width: 352px;
  height: 185px;
  padding: 34px 8px 34px 34px;
  background: var(--white);
  opacity: 0.9;
  border-radius: 0px 0px 24px 24px;
  position: absolute;
  bottom: 0;

  display: flex;
  flex-direction: column;
  justify-content: space-around;

  span {
    font-size: 28px;
    color: var(--dark1);
  }

  strong {
    font-weight: bold;
    font-size: 28px;
    color: var(--dark-purple-ju);
  }
`;

export const Status = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Buttons = styled.div`
  margin-right: 26px;
`;
