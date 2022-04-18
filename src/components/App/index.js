/** @jsxImportSource @emotion/react */
import { jsx, css } from '@emotion/react';
import Header from '../Header';
import TopBar from '../TopBar';
import Content from '../Content';


const containerStyles = css`
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
    <div css={containerStyles}>
      <TopBar />
      <Header />
      <Content />
    </div>
  );
}

export default App;
