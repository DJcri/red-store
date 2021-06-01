import styled from "styled-components";
import image1 from "../images/image1.png";
import category1 from "../images/category-1.jpg";
import category2 from "../images/category-2.jpg";
import category3 from "../images/category-3.jpg";
import product1 from "../images/product-1.jpg";
import product2 from "../images/product-2.jpg";
import product3 from "../images/product-3.jpg";
import product4 from "../images/product-4.jpg";
import product5 from "../images/product-5.jpg";
import product6 from "../images/product-6.jpg";
import product7 from "../images/product-7.jpg";
import product8 from "../images/product-8.jpg";
import exclusive from "../images/exclusive.png";
import user1 from "../images/user-1.png";
import user2 from "../images/user-2.png";
import user3 from "../images/user-3.png";
import { Link } from "react-router-dom";
import { FaQuoteLeft } from "react-icons/fa";

import Card from "./Card";
import Rating from "./Rating";

const Testimonial = (props) => {
  const { name, src } = props;
  return (
    <div className="testimonial">
      <FaQuoteLeft size="34px" color="#ff523b" />
      <p>
        Lorem ipsum is simply dummy text of the printing and typesetting
        industry. Lorem ipsum has been the industry's standard dummy text ever.
      </p>
      <Rating />
      <img src={src} alt="user" />
      <h3>{name}</h3>
    </div>
  );
};

const Home = () => {
  return (
    <>
      <Header>
        <div className="container">
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
        </div>
      </Header>
      <Featured>
        <div className="container">
          <div className="category">
            <img src={category1} alt="category-1" />
          </div>
          <div className="category">
            <img src={category2} alt="category-2" />
          </div>
          <div className="category">
            <img src={category3} alt="category-3" />
          </div>
        </div>
        <div className="container products">
          <h2>Featured Products</h2>
          <div className="cards">
            <Card src={product1} />
            <Card src={product2} />
            <Card src={product3} />
            <Card src={product4} />
          </div>
          <h2>Latest Products</h2>
          <div className="cards">
            <Card src={product1} />
            <Card src={product2} />
            <Card src={product3} />
            <Card src={product4} />
            <Card src={product5} />
            <Card src={product6} />
            <Card src={product7} />
            <Card src={product8} />
          </div>
        </div>
      </Featured>
      <Header>
        <div className="container">
          <Content className="offer">
            <div className="img-container">
              <img src={exclusive} alt="exclusive" />
            </div>
            <div className="text-container">
              <p>Exclusively Available on RedStore</p>
              <h1>Smart Band 4</h1>
              <small>
                The Mi Smart Band 4 features a 39.9% larger (than Mi Band 3)
                AMOLED color full-touch display with adjustable brightness, so
                everything is clear as can be.
              </small>
              <Link to="/products" className="cta">
                Buy Now &#8594;
              </Link>
            </div>
          </Content>
        </div>
      </Header>
      <Featured className="testimonials">
        <div className="container">
          <Testimonial name="Sean Parker" src={user1} />
          <Testimonial name="Mike Smith" src={user2} />
          <Testimonial name="Mabel Joe" src={user3} />
        </div>
      </Featured>
    </>
  );
};

export default Home;

const Header = styled.div`
  background: radial-gradient(#fff, #ffd6d6);
  .offer {
    margin-top: 80px;
    padding: 30px 0;
    .img-container {
      padding: 50px;
    }
    small {
      color: #555;
    }
  }
`;

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
    transition: background 0.5s;
    :hover {
      background: #563434;
    }
  }
`;

const Featured = styled.div`
  margin: 70px 0;
  .container {
    display: flex;
    justify-content: space-between;
    max-width: 1080px;
    margin: auto;
    padding-left: 25px;
    padding-right: 25px;
    .category,
    .testimonial {
      flex-basis: 30%;
      min-width: 250px;
      margin-bottom: 30px;
      img {
        width: 100%;
      }
    }
    .testimonial {
      text-align: center;
      padding: 40px 20px;
      box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.1);
      box-sizing: border-box;
      cursor: pointer;
      transition: 0.5s;
      img {
        margin-top: 50px;
        width: 50px;
        border-radius: 50%;
      }
      h3 {
        font-weight: 600;
        color: #555;
        font-size: 16px;
      }
      p {
        font-size: 12px;
        margin: 12px 0;
        color: #777;
      }
      :hover {
        transform: translateY(-10px);
      }
    }
    .cards {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
    }
  }
  .products {
    flex-direction: column;
    h2 {
      text-align: center;
      margin: 0 auto 80px;
      position: relative;
      line-height: 60px;
      color: #555;
    }
    h2::after {
      content: "";
      background: #ff523b;
      width: 80px;
      height: 5px;
      border-radius: 5px;
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);
    }
  }
`;
