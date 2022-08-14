import "./assets/css/global.css";
import Card from "./components/Card";

import data from "../data.json";

export default function App() {
  const arr_ids = Array();
  const { cards } = data;
  const cardsSort = cards.map( (card) => {
    do {
      const cardID = ( Math.floor( Math.random() * 18 ) + 1 ).toString();

      if ( arr_ids.indexOf(cardID) < 0 ) {
        arr_ids.push(cardID);
        card.id = cardID;
      }
    } while ( card.id === '' )

    return card;
  }).sort((a, b) => parseInt(a.id) > parseInt(b.id) ? 1 : -1);

  return (
    <div className="App">
      <div className="flex flex-col items-center justify-center h-screen">
        <div className="flex flex-wrap gap-6 h-max w-[55%]">
          {
            cardsSort.map( ( card, index ) => {
              const { id, type, icon } = card;
              return (
                <Card key={index} id={id} type={type} icon={icon} />
              )
            })
          }
        </div>
      </div>
    </div>
  )
}
