import style from './SearchInputComponent.module.css'

type SearchInputComponentProps ={
   onChangeSearchInput: (updatedSearchTerm: string) => void
  }


const SearchInputComponent = ({onChangeSearchInput}:SearchInputComponentProps) => {

return (
<form className={style.searchForm }>
 <input type="text" placeholder="Search..." onChange={(e)=>onChangeSearchInput(e.target.value)}></input>
 <button type="reset" onClick={(e)=>onChangeSearchInput('')}>&times;</button>
 </form>
)

}

export default SearchInputComponent 