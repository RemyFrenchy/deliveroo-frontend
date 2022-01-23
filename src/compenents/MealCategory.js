import Meal from "./Meal";

const MealCategory = ({ restaurants }) => {
  return (
    <div className="mealList">
      {restaurants.categories.map((category, index) => {
        return (
          <div className="category">
            <h2 key={index}>{category.meals.length !== 0 && category.name}</h2>

            {/* --- Meal --- */}
            <Meal category={category} />
          </div>
        );
      })}
    </div>
  );
};
export default MealCategory;
