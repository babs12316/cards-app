import  React,{ useState } from "react";
import {
  
NavLink
 } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import CardComponent from "../CardComponent/CardComponent";
import SearchInputComponent from "../SearchInputComponent/SearchInputComponent";
import style from "./CardsComponent.module.css";


const CardsComponent = ():JSX.Element => {
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
       <NavLink to={`/card/${card.id}`} data-testid="card"><CardComponent  card={card} /></NavLink>  ))}
      </section>
    </div>
    </>
  );
};

export default CardsComponent;
