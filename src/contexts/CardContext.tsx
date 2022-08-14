import { createContext, ReactNode, useState } from "react";

interface Card {
  id?: string;
  type?: string;
}

interface CardProviderProps {
  children: ReactNode;
}

interface CardContextType {
  setDataCardOpen: (data?: Card) => void;
  setCardTypeOpen: (type: string) => void;
  dataCardOpen: Card[];
  typeCard: string;
}

export const CardContext = createContext({} as CardContextType);

export function CardProvider({ children }: CardProviderProps) {
  const [ dataCardOpen, setDataCard] = useState<Card[]>([]);
  const [ typeCard, setTypeCard] = useState("");

  function setDataCardOpen(data?: Card) {
    const arrCard =  data ? [...dataCardOpen, data] : [];
    setDataCard(arrCard);
  }

  function setCardTypeOpen(type: string) {
    setTypeCard(type);
  }

  return (
    <CardContext.Provider value={{
      setDataCardOpen,
      dataCardOpen,
      setCardTypeOpen,
      typeCard
    }}>
      {children}
    </CardContext.Provider>
  )
}