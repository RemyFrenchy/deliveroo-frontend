import "./App.css";
import axios from "axios";
import { useState, useEffect } from "react";
import Restaurant from "./compenents/Restaurant";
import MealCategory from "./compenents/MealCategory";

const App = () => {
  // Mise en place du useEffect

  useEffect(() => {
    fetchData();
  }, []);

  //  ----------------------

  const [restaurants, setRestaurants] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [basket, setBasket] = useState([]);
  const [counter, setCounter] = useState(1);

  const newCounters = () => {
    return (
      <div>
        <button
          onClick={() => {
            setCounter(counter - 1);
          }}
        >
          -
        </button>
        <span>{counter}</span>
        <button
          onClick={() => {
            setCounter(counter + 1);
          }}
        >
          +
        </button>
      </div>
    );
  };

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
        <MealCategory
          restaurants={restaurants}
          basket={basket}
          setBasket={setBasket}
        />

        {/* --- Basket --- */}

        <div className="basketArea">
          <button className="valide">Valider mon panier</button>

          {basket.map((meal, index) => {
            return (
              <div key={index}>
                <span style={{ display: counter === 0 ? "none" : "inline" }}>
                  {newCounters()}
                  {meal.title} {meal.price}€ {meal.quantity}
                </span>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default App;
