import styled from "styled-components";
import image1 from "../images/image1.png";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <Content>
      <div className="text-container">
        <h1>
          Give Your Workout
          <br />A New Style!
        </h1>
        <p>
          Success isn't always about greatness. It's about consistency.
          Consistent
          <br />
          hard work gains success. Greatness will come.
        </p>
        <Link to="/products" className="cta">
          Explore Now &#8594;
        </Link>
      </div>
      <div className="img-container">
        <img src={image1} alt="image1" />
      </div>
    </Content>
  );
};

export default Home;

const Content = styled.div`
  margin-top: 70px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  img {
    max-width: 100%;
  }
  h1 {
    font-size: 50px;
    line-height: 60px;
    margin: 25px 0;
  }
  .text-container,
  .img-container {
    flex: 1;
    flex-wrap: wrap;
    min-width: 300px;
    padding: 50px 0;
  }
  .cta {
    margin-top: 20px;
    display: inline-block;
    background: #ff523b;
    text-decoration: none;
    color: white;
    padding: 8px 30px;
    border-radius: 30px;
  }
`;
