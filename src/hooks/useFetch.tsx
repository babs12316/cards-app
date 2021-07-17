import { useEffect, useState } from "react";
import { cardData } from "../constants/apiUrls";
import { ICard } from "../constants/interfaces";

const useFetch = () => {
  const [data, setData] = useState<ICard[]>([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(cardData);
      const result = await response.json();
      setData(result);
    }
    fetchData();
  }, []);
   
  return data;
};

export default useFetch;
