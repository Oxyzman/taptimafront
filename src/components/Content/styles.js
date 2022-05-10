import styled from "@emotion/styled";

const Container = styled.main`
  grid-column: 2/3;
  grid-row: 2/3;
  background: #f2f2f2;

  @media (max-width: 1000px) {
    grid-column: 1/3;
  }
`;

const InnerContainer = styled.div`
  display: flex;
  gap: 25px;
  align-items: flex-start;
  padding: 21px 21px 43px 21px;

  @media (max-width: 750px) {
    flex-direction: column;
  }
`;

const InnerSecondContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  max-width: 910px;
  width: 100%;
`;

export { Container, InnerContainer, InnerSecondContainer };
