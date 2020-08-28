import styled from 'styled-components';

export const ItemCardContent = styled.div`
  display: flex;
  flex-direction: column;

  border-radius: 2.4rem;
  background: var(--white);
  box-shadow: 1px 2px 4px var(--primary);

  max-width: 28.16rem;
  max-height: 47rem;

  @media (min-width: 1180px) {
    max-width: 35.2rem;
  }
`;

export const Container = styled.div`
  width: 28.16rem;
  height: 33.6rem;
  position: relative;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  img {
    max-width: 24.32rem;
    max-height: 100%;
    position: absolute;
    overflow: hidden;
    text-align: center;
  }

  @media (min-width: 1180px) {
    width: 35.2rem;
    height: 42rem;

    img {
      max-width: 30.4rem;
    }
  }
`;

export const Info = styled.div`
  width: 100%;
  padding: 2rem 2.8rem;
  background: var(--white);
  opacity: 0.9;
  border-radius: 0px 0px 2.4rem 2.4rem;
  position: absolute;
  bottom: 0;

  display: flex;
  flex-direction: column;
  justify-content: space-around;

  span {
    font-size: 2rem;
    color: var(--dark1);

    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }

  strong {
    font-weight: 700;
    font-size: 2rem;
    margin-top: 0.4rem;
    color: var(--dark-primary);
  }

  @media (min-width: 1180px) {
    padding: 2.8rem 3.4rem;

    span {
      font-size: 2.8rem;
    }

    strong {
      font-size: 2.8rem;
      margin-top: 0.8rem;
    }
  }
`;

export const Status = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-top: 0.8rem;
`;

export const Buttons = styled.div`
  right: auto;

  svg {
    width: 2.2rem;
    height: 2.2rem;
  }

  @media (min-width: 1180px) {
    svg {
      width: 2.8rem;
      height: 2.8rem;
    }
  }
`;
