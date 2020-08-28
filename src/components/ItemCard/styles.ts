import styled from 'styled-components';

export const ItemCardContent = styled.div`
  display: flex;
  flex-direction: column;

  border-radius: 2.4rem;
  background: var(--white);
  box-shadow: 1px 2px 4px var(--primary);

  max-width: 35.2rem;
  max-height: 47rem;
`;

export const Container = styled.div`
  width: 35.2rem;
  height: 42rem;
  position: relative;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  img {
    max-width: 30.4rem;
    max-height: 42rem;
    position: absolute;
    overflow: hidden;
    text-align: center;
  }
`;

export const Info = styled.div`
  width: 35.2rem;
  height: 18.5rem;
  padding: 3.4rem;
  background: var(--white);
  opacity: 0.9;
  border-radius: 0px 0px 2.4rem 2.4rem;
  position: absolute;
  bottom: 0;

  display: flex;
  flex-direction: column;
  justify-content: space-around;

  span {
    font-size: 2.8rem;
    color: var(--dark1);
  }

  strong {
    font-weight: bold;
    font-size: 2.8rem;
    color: var(--dark-primary);
  }
`;

export const Status = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Buttons = styled.div`
  right: auto;
`;
