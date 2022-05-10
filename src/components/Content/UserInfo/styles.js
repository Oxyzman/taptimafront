import styled from "@emotion/styled";

const Container = styled.section`
  background: white;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.3);
  border-radius: 5px;
  max-width: 381px;
  width: 100%;
`;
const Block = styled.div`
  display: flex;
  gap: 41px;
  padding: 24px;
  border-bottom: 1px solid #e4e7eb;
`;
const UserinfoBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  font-weight: 500;
  font-size: 24px;
  line-height: 28px;
  letter-spacing: -0.06px;
`;
const InneruserinfoBlock = styled.div`
  display: flex;
  flex-direction: column;

  color: #9ea0a5;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: -0.05px;
`;
const Image = styled.img`
  display: block;
  width: 140px;
  height: 140px;
  border-radius: 10%;
  overflow: hidden;
  max-widht: 100%;
  object-fit: scale-down;
`;
const ButtonsBlock = styled.footer`
  display: flex;
  gap: 58px;
  margin: 10px 24px;

  & button {
    background: white;
    width: 147px;
    height: 40px;
    border: none;
    color: #425a70;
    font-weight: 600;
    font-size: 12px;
    letter-spacing: 1.25px;
    line-height: 16px;
    text-transform: uppercase;
    cursor: pointer;
  }

  & button:hover {
    color: #1665d8;
    transition-duration: 0.5s;
  }
`;

export {
  Container,
  Block,
  UserinfoBlock,
  InneruserinfoBlock,
  Image,
  ButtonsBlock,
};
