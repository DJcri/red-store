import styled from "styled-components";
import { Link } from "react-router-dom";
import logo from "../images/logo.png";
import cart from "../images/cart.png";
import menu from "../images/menu.png";

const Nav = () => {
  return (
    <div className="container">
      <Bar>
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/">Products</Link>
          </li>
          <li>
            <Link to="/">About</Link>
          </li>
          <li>
            <Link to="/">Contact</Link>
          </li>
          <li>
            <Link to="/">Account</Link>
          </li>
          <li>
            <div className="img-container">
              <img src={cart} alt="cart" />
            </div>
          </li>
          <li>
            <div className="img-container menu">
              <img src={menu} alt="menu" />
            </div>
          </li>
        </ul>
      </Bar>
    </div>
  );
};

export default Nav;

const Bar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100px;
  ul {
    display: flex;
    list-style-type: none;
    li {
      display: flex;
      align-items: center;
      margin-left: 20px;
      @media (max-width: 800px) {
        a {
          display: none;
        }
      }
      .img-container {
        width: 30px;
        display: none;
        img {
          width: 100%;
          cursor: pointer;
        }
        @media (max-width: 800px) {
          display: block;
        }
      }
    }
    a {
      color: #555;
      text-decoration: none;
    }
  }
  .logo img {
    width: 125px;
  }
  @media only screen and(max-width:1000px) {
    background: black;
  }
`;
