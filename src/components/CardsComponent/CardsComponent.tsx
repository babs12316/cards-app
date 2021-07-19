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
      <>
      <SearchInputComponent onChangeSearchInput={handleChangeSearchInput}/>    
      <div className={style.cardsContainer}>
      
      <section className={style.cards} data-testid="cardsSection">
        {cards.map((card) => (
         <a key={card.id} href={"#"+card.id} data-testid="card"> <CardComponent  card={card}></CardComponent></a>
        ))}
      </section>
    </div>
    </>
  );
};

export default CardsComponent;
