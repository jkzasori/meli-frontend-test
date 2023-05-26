import { useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";
import { InputSearch } from "components";
export const SearchBar = () => {

  function useQuery() {
    return new URLSearchParams(useLocation().search);
  }
  let query = useQuery().get("search");

  const [input, setInput] = useState(query || "");
  let navigate = useNavigate();

  const locationSearch = (item) => {
    setInput(item)
    if (input) {
      navigate(`/items?search=${input}`);
    }
  };

  return (
    <InputSearch onSearch={locationSearch} />
  );
};