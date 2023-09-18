import { Card } from "flowbite-react";
import { useState } from "react";
import { useCountStore } from "./Cart";


export interface Props {
  productName: string
  price: number
  imageUrl: string

}
 
const Cards = ({imageUrl, price, productName}: Props) => {
  const [clicks, setClicks] = useState(0)
  const {addCard} = useCountStore()
  function addCartAlert() {
    setClicks(clicks + 1);
    console.log(clicks)
    if (clicks === 0) {
      alert("Item adicionado ao carinho");
      useCountStore.getState().cards
      addCard({imageUrl, price, productName})
      


    } else if (clicks >= 1) {
      alert("Este item já esta no seu carinho");
    }
  }
  return (
    <Card
      className="w-96 lg:w-1/4 flex flex-col flex-wrap"
      imgAlt="Apple Watch Series 7 in colors pink, silver, and black"
      imgSrc={imageUrl}
    >
      <a href="#">
        <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
          <p>{productName}</p>
        </h5>
      </a>
    
      <div className="flex items-center justify-between">
        <span className="text-3xl font-bold text-gray-900 dark:text-white"> $
          {price} 
        </span>
        <a
          className="rounded-lg bg-cyan-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
          href="#" onClick={addCartAlert}>{clicks == 0 ? "Adicionar ao carinho" : "adicionado!" }  
         
        </a>
      </div>
    </Card>
  );
};

export default Cards;
