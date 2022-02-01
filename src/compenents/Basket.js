const Basket = ({ meal, basket, setBasket, addToBasket }) => {
  return (
    <div className="basketArea">
      <button>Valider mon panier</button>
      {basket.map((title, index) => {
        return (
          <ul>
            <li> {basket.title} </li>
          </ul>
        );
      })}
    </div>
  );
};

export default Basket;
