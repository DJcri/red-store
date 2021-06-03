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
import logoCoke from "../images/logo-coca-cola.png";
import logoGodrej from "../images/logo-godrej.png";
import logoOppo from "../images/logo-oppo.png";
import logoPaypal from "../images/logo-paypal.png";
import logoPhilips from "../images/logo-philips.png";
import appStore from "../images/app-store.png";
import playStore from "../images/play-store.png";
import logoWhite from "../images/logo-white.png";
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
    <Page>
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
              <Link to="/" className="cta">
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
              <Link to="/" className="cta">
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
      <div className="container">
        <div className="brands">
          <div className="img-container">
            <img src={logoCoke} alt="coca-cola" />
          </div>
          <div className="img-container">
            <img src={logoGodrej} alt="godrej" />
          </div>
          <div className="img-container">
            <img src={logoOppo} alt="oppo" />
          </div>
          <div className="img-container">
            <img src={logoPaypal} alt="paypal" />
          </div>
          <div className="img-container">
            <img src={logoPhilips} alt="philips" />
          </div>
        </div>
      </div>
      <footer>
        <div className="download-links sec">
          <h3>Download Our App</h3>
          <p>Download App for Android and iOS Mobile Phone</p>
          <div className="links">
            <div className="img-container">
              <img src={appStore} alt="app-store" />
            </div>
            <div className="img-container">
              <img src={playStore} alt="play-store" />
            </div>
          </div>
        </div>
        <div className="purpose sec">
          <div className="img-container">
            <img src={logoWhite} alt="logo-white" />
          </div>
          <p>
            Our Purpose is to Make the Pleasure and Benefits of Sports
            Accessible to Many
          </p>
        </div>
        <div className="useful-links sec">
          <h3>Useful Links</h3>
          <ul>
            <li>Coupons</li>
            <li>Blog post</li>
            <li>Return Policy</li>
            <li>Join Affiliate</li>
          </ul>
        </div>
        <div className="social sec">
          <h3>Follow Us</h3>
          <ul>
            <li>Facebook</li>
            <li>Twitter</li>
            <li>Instagram</li>
            <li>Youtube</li>
          </ul>
        </div>
      </footer>
    </Page>
  );
};

export default Home;

const Page = styled.div`
  .brands {
    max-width: 1080px;
    display: flex;
    justify-content: space-between;
    margin: 60px auto;
    @media (max-width: 1000px) {
      flex-direction: column;
      align-items: center;
    }
    .img-container {
      img {
        cursor: pointer;
        filter: grayscale(100%);
        :hover {
          filter: none;
        }
      }
    }
  }
  footer {
    display: flex;
    justify-content: right;
    background: black;
    color: #8a8a8a;
    font-size: 14px;
    padding: 60px;
    @media (max-width: 1400px) {
      flex-direction: column;
      text-align: center;
      align-items: center;
      h3 {
        text-align: center;
      }
      .links {
        justify-content: center;
      }
    }
    img {
      width: 100%;
    }
    h3 {
      color: white;
      margin-bottom: 20px;
    }
    .sec {
      text-align: center;
      min-width: 250px;
      margin-bottom: 20px;
      flex-basis: 12%;
      ul {
        padding: 0;
        list-style-type: none;
        display: flex;
        flex-direction: column;
      }
    }
    p,
    .download-links {
      flex-basis: 30%;
      text-align: left;
      display: flex;
      flex-direction: column;
      .links {
        display: flex;
      }
    }
    .img-container {
      width: 140px;
      margin: 3px;
    }
    .purpose {
      flex: 1;
      * {
        text-align: center;
      }
      .img-container {
        width: 180px;
        margin: 0 auto;
        margin-bottom: 20px;
      }
    }
  }
`;

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
    @media (max-width: 800px) {
      display: block;
      width: fit-content;
    }
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
  @media (max-width: 800px) {
    flex-direction: column;
  }
`;

const Featured = styled.div`
  margin: 70px 0;
  .container {
    @media (max-width: 800px) {
      flex-direction: column;
    }
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
