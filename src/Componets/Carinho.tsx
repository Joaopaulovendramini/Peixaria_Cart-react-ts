import Cards from "./Cards";
import { useCountStore } from "./Cart";


const Carinho = () => {
    const {cards} = useCountStore()
    return (
    <>
<div className="flex flex-col justify-center gap-8 mt-8 items-center lg:flex-row">
      {cards.map(({ imageUrl, price, productName }) => (
        <Cards
          imageUrl={imageUrl}
          price={price}
          productName={productName}
        />
      ))}
      
    </div>

   
    </>
    );
};

export default Carinho;