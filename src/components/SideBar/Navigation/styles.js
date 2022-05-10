import styled from "@emotion/styled";

const Container = styled.nav`
  margin: 20px 0;
  padding: 25px 0;
  border-top: 1px solid #e4e7eb;
  border-bottom: 1px solid #e4e7eb;
`;

const List = styled.ul`
  margin: 0 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 8px;

  & li {
    padding: 14px 19px;

    &:hover {
      background: #f6f9fd;
      box-shadow: inset 3px 0 #1665d8;
      border-radius: 4px;
      transition-duration: 0.5s;
    }

    &.active {
      background: #f6f9fd;
      box-shadow: inset 3px 0 #1665d8;
      border-radius: 4px;

      & span {
        color: #212529;
      }
    }
  }
`;

export { Container, List };
