import styled from "styled-components";

export const ModalContainer = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  svg {
    width: 40px;
    height: 40px;
    position: absolute;
    right: -15px;
    top: -15px;
    background-color: var(--color-white);
    border-radius: 50%;
  }
`;

export const BoxModal = styled.div`
  padding: 1rem 2rem;
  background-color: var(--color-white);
  border-radius: 0.25rem;
  min-width: 400px;
  position: relative;
  form {
    display: flex;
    flex-direction: column;
    row-gap: 1rem;
    input,
    textarea {
      padding: 1rem;
      border-radius: 0.25rem;
      border: none;
      outline: none;
      border: 1px solid var(--color-black);
    }
    textarea {
      margin: 0;
    }
  }
`;
