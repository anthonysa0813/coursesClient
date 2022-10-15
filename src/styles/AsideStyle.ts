import styled from "styled-components";

export const AsideContainer = styled.aside`
  background: var(--color-white);
  border-radius: 1px;
  box-shadow: 4px 4px 24px #e1e1e1, -24px -24px 34px #ededed;
  ul {
    margin: 0;
    padding: 0;
    list-style-type: none;
    li {
      font-size: 1.5rem;
      margin-block: 2rem;
      a {
        font-weight: bold;
        color: var(--color-black);
        svg {
          margin-inline: 1rem;
        }
      }
      .active {
        background-color: var(--color-gray100);
        padding: 1rem;
        border-radius: 0.5rem;
      }
    }
  }
  nav {
    padding: 5rem;
  }
`;
