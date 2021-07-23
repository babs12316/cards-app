import { useEffect, useState } from "react";
import cardData  from "../constants/apiUrls";
import { ICard } from "../constants/interfaces";

const useFetch = (searchTerm:string):ICard[] =>{
  const [data, setData] = useState<ICard[]>([]);
  let url:string;
  if(searchTerm ===''){
      url=cardData
  }else{
      url=`${cardData}?search=${searchTerm}`
  }

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(url);
      const result = await response.json();
      setData(result);
    }
    fetchData();
  }, [url]);
   
  return data;
};

export default useFetch;
