const BasketArea = ({ addMeal }) => {
  return (
    <div className="basketArea">
      <button>Valider mon panier</button>
      <p>Votre panier est vide</p>
      <p>{addMeal}</p>
    </div>
  );
};

export default BasketArea;
