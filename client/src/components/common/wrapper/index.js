// import HeaderLogo from "./headerLogo";
import "./wrapper.style.scss"
import { Header } from "components";
import { SearchBar } from "./searchBar";

export const Wrapper = (props) => {
  const { children } = props;
  return (
    <div className="wrapperContainer">
      <Header >
        <SearchBar />
      </Header>
      <div className="wrapperBody">
        {children}
      </div>
    </div>
  );
};
