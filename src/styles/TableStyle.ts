import styled from "styled-components";

export const TableContainer = styled.div`
  margin-block: 42px;
  padding-inline: 16px;

  .tableHead {
    display: flex;
    justify-content: space-between;
    align-items: center;
    h3 {
      font-weight: 700;
      font-size: 36px;
      line-height: 44px;

      &:hover {
      }
    }
    .actions {
      display: flex;
      column-gap: 1rem;
    }
  }
  .tableBox {
    border-radius: 8px;
  }
  .box {
    border-radius: 8px;

    display: grid;
    grid-template-columns: auto repeat(5, 1fr);
    column-gap: 1rem;
    background-color: var(--color-white);
    padding: 24px 32px;
    /* border-top-left-radius: 8px;
    border-top-right-radius: 8px; */
    border-bottom: 1px solid var(--color-gray100);
  }
  .statusButton {
    padding: 15px 22px;
    border-radius: 40px;
    color: var(--color-white);
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    /* width: auto; */
    display: inline-block;
    cursor: pointer;
  }
  .published {
    background-color: var(--color-green);
  }
  .draft {
    background-color: var(--color-gray100);
    color: var(--color-black);
    min-width: 70px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .priceBg {
    background-color: var(--color-purple);
  }

  .check,
  .title,
  .slug,
  .status,
  .price,
  .duration {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .blockActive {
    border-left: 2px solid var(--color-blue);
  }
`;

export const BoxModalToDelete = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
  padding: 2rem;
  h3 {
    margin: 0;
    font-size: 2rem;
  }
  strong {
    font-weight: bold;
    margin-block-start: 2rem;
    font-size: 24px;
  }
  button {
    display: inline-block;
    width: 200px;
  }
`;
