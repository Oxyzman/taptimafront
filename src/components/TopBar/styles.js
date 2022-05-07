import styled from "@emotion/styled";

const Container = styled.section`
  background: #3f51b5;
  grid-column: 1/3;
  grid-row: 1/2;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 24px;

  @media (max-width: 1000px) {
    grid-column: 2/3;
  }
`;

const ButtonsContainer = styled.div`
  display: flex;
  gap: 16px;
`;
export { Container, ButtonsContainer };
