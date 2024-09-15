import React, { useEffect, useState } from "react";
import CountryCard from "./CountryCard";
import axios from "axios";

const Countries = () => {
  const CountriesAPI_Endpoint =
    "https://xcountries-backend.azurewebsites.net/all";
  const [countries, setCountries] = useState([]);
  const [input, setInput] = useState("");

  const handleSearch = (e) => {
    setInput(e.target.value);
  };

  useEffect(() => {
    axios
      .get(CountriesAPI_Endpoint)
      .then((response) => {
        setCountries(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div
        style={{
          backgroundColor: "#aba5a517",
          padding: "5px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          boxSizing: "border-box",
          boxShadow: "0px 0px 8px #ddd",
          width: "100%",
          height: "2.5rem",
        }}
      >
        <input
          type="text"
          name="search"
          placeholder="Search for countries..."
          value={input}
          onChange={handleSearch}
          style={{ width: "50%", padding: "5px" }}
        />
      </div>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {input === ""
          ? countries.map((country, index) => (
              <CountryCard key={index} src={country.flag} name={country.name} />
            ))
          : countries
              .filter((country) => country.name.includes(input))
              .map((country, index) => (
                <CountryCard
                  key={index}
                  src={country.flag}
                  name={country.name}
                />
              ))}
      </div>
    </div>
  );
};
export default Countries;
