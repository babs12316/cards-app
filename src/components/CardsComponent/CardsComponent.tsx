import useFetch from "../../hooks/useFetch";
import CardComponent from "../CardComponent/CardComponent";
import style from './CardsComponent.module.css'


const CardsComponent = () => {
  const cards = useFetch();

  return (
    <section className={style.cards}>
           {cards.map((card) => (
        <CardComponent key={card.id} card={card}></CardComponent>
      ))}
    </section>
  );
};

export default CardsComponent;
