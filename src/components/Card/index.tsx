import { useContext, useEffect, useState } from "react";
import { CardContext } from "../../contexts/CardContext";

interface CardProps {
  id: string;
  type: string;
  icon: string;
}

export default function Card(props: CardProps) {
  const { id, type, icon } = props;
  const [ hits, setHits ] = useState(0);
  const { setDataCardOpen, dataCardOpen } = useContext(CardContext);

  useEffect(() => {
    if ( dataCardOpen.length === 2 ) {
      const cardsType = dataCardOpen.map( card => card.type );
      const cardsEquals = cardsType.some( ( cardType, index ) => cardsType.indexOf( cardType ) != index);

      if( !cardsEquals ) {
        setTimeout( () => {
          dataCardOpen.map(( card ) => {
            const element = document.getElementById( `card-${card.id}`);
            
            if ( element )
              element.style.transform = "rotateY(0deg)";
          })
        }, 2000 );
      } else {
        setHits(hits + 1);
      }

      if ( hits === 8 ) {
        const myAudio = new Audio('./assets/sound/smb_stage_clear.wav');
        myAudio.play();
      }

      setDataCardOpen();
    }
  }, [dataCardOpen, hits]);

  function clickFlipCard(id: string) {
    const elementCard = document.getElementById( `card-${id}`);
    const rotate =  elementCard?.style.transform === "rotateY(0deg)" || elementCard?.style.transform === "" ? "rotateY(180deg)" : "rotateY(0deg)";
    const arrCardFilter = dataCardOpen.filter( card => card.id === id );

    if (arrCardFilter.length === 0)
      setDataCardOpen({ id, type });

    if ( elementCard )
      elementCard.style.transform  = rotate;
  }

  return (
    <div className="flip-card flex grow shrink-0 bg-white w-16 h-32 sm:w-20 sm:h-36 md:w-36 md:h-52 rounded-lg">
      <div id={`card-${id}`} className="flip-card-inner">
        <div className="flip-card-front flex items-center bg-gray-600 hover:bg-gray-200 cursor-pointer rounded-lg" onClick={() => clickFlipCard(id)} >
          <img src="./assets/images/mushroom.png" />
        </div>
        <div className="flex items-center flip-card-back rounded-lg">
          <img src={icon} />
        </div>
      </div>
    </div>
  )
}