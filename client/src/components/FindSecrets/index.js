import React, { useState } from "react";
import api from "../../utils/api";
import SearchResults from "../SearchResults";
import "./style.css";

function FindSecrets(props) {
  const [form, setForm] = useState({ search: "" });
  const [searchResults, setSearchResults] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((form) => ({ ...form, [name]: value }));
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      const { data } = await api.searchByTitle({ title: form.search });
      // console.log("data from server: ", data);
      setSearchResults(data);
    } catch (err) {
      console.log(err);
    }
  };

  
  return (
    <>
      <div className="background-search">
        <div className="search-area">
          <h4 className="search-title search-secret-title">Search for a Game Secret Here</h4>
          <div className="row justify-content-center">
            <form className="form-inline search-post-form">
              <input
                className="form-control mr-sm-2"
                type="text"
                name="search"
                placeholder="Search for a Post"
                aria-label="Search"
                onChange={handleChange}
                value={form.search}
              />
              <button
                className="search-btn btn btn-danger my-2 my-sm-0"
                type="submit"
                onClick={handleSearch}
              >
                Search
            </button>
            </form>
          </div>
        </div>
      </div>

      <SearchResults searchResults={searchResults} />
    </>
  );
}

export default FindSecrets;
