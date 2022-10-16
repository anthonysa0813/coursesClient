import styled from "styled-components";

export const Maingrid = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
`;

export const MainContainer = styled.main`
  padding: 2rem;
  background-color: var(--color-gray100);
  height: 100vh;
  overflow: auto;
`;
