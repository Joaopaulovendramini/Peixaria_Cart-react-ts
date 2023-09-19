import Cards from "../Card-Model/Cards";
import { useCountStore } from "./Cart";


const Carinho = () => {
    const {cards} = useCountStore()
    const cardsWithCar = cards.map((card) => ({
      ...card,
      car: false,
    }));

    return (
    <>
<div className="flex flex-col flex-wrap justify-center gap-8 mt-8 items-center lg:flex-row">
      {cardsWithCar.map(({ imageUrl, price, productName, car}) => (
        <Cards
          imageUrl={imageUrl}
          price={price}
          productName={productName}
          car={car}
        />
      ))}
      
    </div>

   
    </>
    );
};

export default Carinho;