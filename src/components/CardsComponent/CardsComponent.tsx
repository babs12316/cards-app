import { useState } from "react";
import useFetch from "../../hooks/useFetch";
import CardComponent from "../CardComponent/CardComponent";
import SearchInputComponent from "../SearchInputComponent/SearchInputComponent";
import style from "./CardsComponent.module.css";

const CardsComponent = () => {
    const [searchInput,setSearchInput]= useState('')
    const cards = useFetch(searchInput);
    const handleChangeSearchInput = (updatedSearchTerm: string) =>{  
        setSearchInput(updatedSearchTerm)
    }

  return (
      <div>
      <SearchInputComponent onChangeSearchInput={handleChangeSearchInput}/>    
      <div className={style.cardsContainer}>
      
      <section className={style.cards}>
        {cards.map((card) => (
          <CardComponent key={card.id} card={card}></CardComponent>
        ))}
      </section>
    </div>
    </div>
  );
};

export default CardsComponent;
