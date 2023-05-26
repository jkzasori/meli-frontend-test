import { useNavigate, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { InputSearch } from "components";
export const SearchBar = () => {

  function useQuery() {
    return new URLSearchParams(useLocation().search);
  }
  let query = useQuery().get("search");

  const [input, setInput] = useState(query || "");
  let navigate = useNavigate();

  const locationSearch = (item) => {

    if (input) {
      console.log("llamado")
      navigate(`/items?search=${input}`);
    }
  };

  const handleInputChange = (item) => {
    setInput(item)
  }

  useEffect(() => {
    handleInputChange(query)
  }, [query])

  return (
    <InputSearch value={input} handleSearchChange={handleInputChange} onSearch={locationSearch} />
  );
};