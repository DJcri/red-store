import styled from "styled-components";
import Rating from "./Rating";

const Card = (props) => {
  const { title, src } = props;

  return (
    <Content>
      <img src={src} alt="product" />
      <h4>{title || "Red Printed T-Shirt"}</h4>
      <Rating />
      <p>$50.00</p>
    </Content>
  );
};

export default Card;

const Content = styled.div`
  flex-basis: 21%;
  margin-bottom: 50px;
  transition: 0.5s;
  * {
    margin: 0;
  }
  img {
    width: 100%;
  }
  h4 {
    color: #555;
    font-weight: normal;
  }
  p {
    font-size: 14px;
  }
  :hover {
    transform: translateY(-5px);
  }
`;
