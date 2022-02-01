const Meal = ({ handleClick, category, meal, basket, setBasket }) => {
  return (
    <div className="card">
      {category.meals.map((meal, index) => {
        return (
          <div
            onClick={() => {
              const newBasket = [...basket];
              newBasket.push(meal);
              setBasket(newBasket);
              console.log(meal);
            }}
            className="menuCard"
          >
            <div className="menuCardDescription">
              <h3 key={meal.id}> {meal.title} </h3>
              <p key={index}>{meal.description} </p>
              <div className="etoile">
                <span key={index}>{meal.price} €</span>

                {meal.popular && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="-2 2 24 24"
                    fill="#ff8000"
                    class="feather feather-star"
                  >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                  </svg>
                )}
                <strong>{meal.popular && "Populaire"}</strong>
              </div>
            </div>
            {meal.picture && <img key={index} src={meal.picture} alt="meal" />}
          </div>
        );
      })}
    </div>
  );
};
export default Meal;
