import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  margin: 20px 43px;
  height: 550px;
  width: 876px;
`;

export const Title = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;

  h1 {
    font-family: Pompiere;
    font-size: 36px;
  }
  span {
    font-size: 12px;
  }
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;

  width: 100%;
`;

export const Inputs = styled.div`
  div {
    margin-bottom: 8px;
    width: 300px;
  }
`;

export const Photos = styled.div`
  display: flex;
  align-items: center;
`;

export const AddPhoto = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 316px;
  height: 378px;
  background: var(--white);
  box-shadow: 1px 2px 4px var(--purple-ju);
  border-radius: 24px;

  div {
    border: 2px dashed var(--dark-purple-ju);
    height: 302.4px;
    width: 252.8px;
    border-radius: 24px;

    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;

    span {
      font-size: 16px;
      line-height: 19px;
      color: var(--dark1);
      margin: 24px;
    }
  }
`;

export const MorePhotos = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 80px;
  height: 96px;
  background: var(--white);
  box-shadow: 1px 2px 4px var(--purple-ju);
  border-radius: 24px;
  margin-left: 56px;

  div {
    border: 2px dashed var(--dark-purple-ju);
    border-radius: 24px;
    width: 60px;
    height: 72px;

    display: flex;
    align-items: center;
    justify-content: center;

    strong {
      font-size: 32px;
      color: var(--dark1);
    }
  }
`;

export const Submit = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 475px;
  height: 64px;
  background-color: var(--purple-ju);
  box-shadow: 2px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 8px;

  font-weight: bold;
  font-size: 24px;
  color: var(--background);
  transition: background-color 0.2s;

  &:hover {
    background-color: var(--dark-purple-ju);
  }
`;
