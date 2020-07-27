import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 48px;
  background-color: var(--pink-ju);
  left: 0%;
  right: 0%;
`;

export const FooterContent = styled.div`
  height: 140px;

  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const FooterText = styled.div`
  font-family: Pompiere;
  font-size: 32px;
  color: var(--dark-purple-ju);
`;

export const Social = styled.div`
  height: 92px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  div,
  a {
    display: flex;
    align-items: center;
    text-decoration: none;

    p {
      font-family: Pompiere;
      font-size: 32px;
      color: var(--dark-purple-ju);
      margin-left: 30px;
    }
  }

  a:hover {
    opacity: 0.8;
  }
`;
