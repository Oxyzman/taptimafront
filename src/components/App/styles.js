import styled from "@emotion/styled";

const Container = styled.div`
  display: grid;
  grid-template-columns: 270px 1fr;
  grid-template-rows: 64px 1fr;
  height: 100%;

  @media (max-width: 1000px) {
    grid-template-columns: 50px 1fr;
  }
`;

export default Container;
