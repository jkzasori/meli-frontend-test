import {
  Home, ItemList, ItemDetail
} from "pages";
import { Wrapper } from "components";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function Screens(props) {
  return (
    <Router>
      <Wrapper>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/items" element={<ItemList />} />
          <Route exact path="/items/:id" element={<ItemDetail />} />
        </Routes>
      </Wrapper>
    </Router>
  );
}

export default Screens;