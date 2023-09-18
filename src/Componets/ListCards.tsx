import Cards from "./Cards";
import cardsProps from "./Card.json";

const ListCards = () => {
  return (
    <div className="flex flex-col justify-center gap-8 mt-8 items-center lg:flex-row">
      {cardsProps.map(({ imageUrl, price, productName }) => (
        <Cards
          imageUrl={imageUrl}
          price={price}
          productName={productName}
        />
      ))}
      
    </div>
  );
};

export default ListCards;
