import Cards from "../Card-Model/Cards";
import cardsProps from "../Card-Model/Card.json";

const ListCards = () => {
  return (
    <div className="flex flex-col flex-wrap justify-center gap-8 mt-8 items-center lg:flex-row">
      {cardsProps.map(({ imageUrl, price, productName, car }) => (
        <Cards
          imageUrl={imageUrl}
          price={price}
          productName={productName}
          car={car}
        />
      ))}
    </div>
  );
};

export default ListCards;
