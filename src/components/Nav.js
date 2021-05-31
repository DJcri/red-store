import styled from "styled-components";
import { Link } from "react-router-dom";
import logo from "../images/logo.png";

const Nav = () => {
  return (
    <Bar>
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <ul>
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/products">Products</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/account">Account</Link>
        </li>
      </ul>
    </Bar>
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
      margin-left: 20px;
    }
    a {
      color: #555;
      text-decoration: none;
    }
  }
  .logo img {
    width: 125px;
  }
`;
