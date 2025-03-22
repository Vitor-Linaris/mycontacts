import styled from 'styled-components';

export const Overlay = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(5px);

  width: 100%;
  height: 100%;

  position: absolute;
  top: 0;
  left: 0;
`;

export const Container = styled.div`
  max-width: 450px;
  width: 100%;

  background: #fff;

  border-radius: 4px;
  padding: 24px;

  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.4);

  h1 {
    font-size: 22px;
    color: ${({ theme, danger }) => (
    danger ? theme.colors.danger.main : theme.colors.gray[900]
  )};
  }

  p {
    margin-top: 8px;
  }
`;

export const Footer = styled.footer`
  margin-top: 32px;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  .cancel-button {
    background: transparent;
    border: none;
    font-size: 16px;
    margin-right: 8px;
    color: ${({ theme }) => theme.colors.gray[200]};
  }
`;
