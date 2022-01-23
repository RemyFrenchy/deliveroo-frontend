import "./App.css";
import axios from "axios";
import { useState, useEffect } from "react";
import Restaurant from "./compenents/Restaurant";
import MealCategory from "./compenents/MealCategory";
import BasketArea from "./compenents/BasketArea";

const App = () => {
  // Mise en place du useEffect

  useEffect(() => {
    fetchData();
  }, []);

  //  ----------------------
  const [restaurants, setRestaurants] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://devileroo-backend-test.herokuapp.com/"
      );
      console.log(response.data.restaurant.name);

      setRestaurants(response.data);
      setIsLoading(false);
    } catch (error) {
      alert(error.message);
    }
  };

  return isLoading ? (
    <span>En cours de chargement... </span>
  ) : (
    <div>
      {/* --- Restaurant Header --- */}
      <Restaurant restaurants={restaurants} />

      <section>
        {/* --- Liste des menus --- */}
        <MealCategory restaurants={restaurants} />

        {/* --- Basket area --- */}
        <BasketArea />
      </section>
    </div>
  );
};

export default App;
