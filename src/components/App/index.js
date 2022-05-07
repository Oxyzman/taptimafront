import styled from "@emotion/styled";
import SideBar from "../SideBar";
import TopBar from "../TopBar";
import Content from "../Content";

const Container = styled.div`
  display: grid;
  grid-template-columns: 270px 1fr;
  grid-template-rows: 64px 1fr;
  height: 100%;

  @media (max-width: 1000px) {
    grid-template-columns: 50px 1fr;
  }
`;

function App() {
  return (
    <Container>
      <TopBar />
      <SideBar />
      <Content />
    </Container>
  );
}

export default App;
