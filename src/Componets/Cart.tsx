import { create } from "zustand";
import { persist } from "zustand/middleware";
import { Props as CardsProps } from "./Cards"; // as alias


  export interface CartStore {   //Boa pratica maisculo interface
    cards: CardsProps[]
    addCard: (card: CardsProps) => void;
  
  }


  export const useCountStore = create(
    persist<CartStore>(
      (set) => ({
        cards: [],
        addCard: (card) => set((state) => ({ cards:[...state.cards, card] })),
      }), {
        name: 'count-store'
      }
    )
  );
  