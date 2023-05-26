import { Link } from "react-router-dom";
import logo from "assets/img/Logo_ML.png";
import "./header.style.scss";

export const Header = ({children}) => {
  return (
    <header >
      <div className="headerLogoContainer">
        <Link className="logoContainer" to="/">
          <img src={logo} alt="mercado libre" />
        </Link>
       {children}
      </div>
    </header>
  );
};