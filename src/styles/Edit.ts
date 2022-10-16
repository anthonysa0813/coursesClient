import styled from "styled-components";

export const EditForm = styled.form`
  display: grid;
  width: 50%;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  .status {
    grid-column: 1/-1;
    select {
      padding: 1rem;
    }
  }
  .desc {
    grid-column: 1/-1;
    textarea {
      padding: 0.25rem;
    }
  }
  .field {
    display: flex;
    flex-direction: column;
    input {
      padding: 1rem;
      border-radius: 0.25rem;
      border: none;
      outline: none;
      border: 1px solid var(--color-black);
    }
  }
`;
