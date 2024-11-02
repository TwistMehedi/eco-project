import { updateAddToCard } from "./updateAddToCard";

export const getLocalStorageProduct =()=>{
  let getLocalStorage =  localStorage.getItem("productCardLS")
  if(!getLocalStorage){
    return [];
  };

  getLocalStorage = JSON.parse(getLocalStorage);
  updateAddToCard(getLocalStorage)
  return getLocalStorage;
}