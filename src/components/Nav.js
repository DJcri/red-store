import styled from "styled-components";
import { Link } from "react-router-dom";
import logo from "../images/logo.png";

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
