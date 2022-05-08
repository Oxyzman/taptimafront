import Container from "./styles";
import SideBar from "../SideBar";
import TopBar from "../TopBar";
import Content from "../Content";

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
