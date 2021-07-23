import React, { useState } from 'react'
import style from './SearchInputComponent.module.css'

type SearchInputComponentProps ={
   onChangeSearchInput: (updatedSearchTerm: string) => void
  }


const SearchInputComponent = ({onChangeSearchInput}:SearchInputComponentProps): JSX.Element =>{
const [search,setSearch]= useState<string>('')
const handleClick =()=>{
setSearch(' ')
onChangeSearchInput(''); 
}

const handleChange=(e: React.ChangeEvent<HTMLInputElement>)=>{
  setSearch(e.target.value)
  onChangeSearchInput(e.target.value); 
}
return (
  
<form className={style.searchForm }>
 <input type="text" placeholder="Search..." value={search} onChange={(e)=>handleChange(e)} />
 <button type="button" onClick={()=>handleClick()}>&times;</button> 
 {/*  <button type="button" onClick={()=>onChangeSearchInput('')}>&times;</button>  */}
 </form>
)
}
export default SearchInputComponent 