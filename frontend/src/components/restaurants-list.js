import React from "react";
import RestaurantDataService from "../services/restaurant";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const RestaurantsList = (props) => {
  const [restaurants, setRestaurants] = React.useState([]);
  const [searchName, setSearchName] = React.useState("");
  const [searchZip, setSearchZip] = React.useState("");
  const [searchCuisine, setSearchCuisine] = React.useState("");
  const [cuisines, setCuisines] = React.useState(["All Cuisines"]);

  return <div className="App">Hello World</div>;
};

export default RestaurantsList;
