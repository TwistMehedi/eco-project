import { addToCard } from "./addToCard";
import { homeQuantityToggle } from "./homeQuantityToggle";

const productContainer = document.querySelector(".productContainer");
const productTemplate = document.querySelector("#productTemplate");
 
 

export const homeProductCard = (products) => {

    if(!products){
        return false;
    }

  products.forEach(product => {
    const { brand, category, description, id, img, name, price, stock } = product;

    const productClone = document.importNode(productTemplate.content, true);

    productClone.querySelector("#cardValue").setAttribute("id", `card${id}`);

    productClone.querySelector(".productName").innerText = name;
    productClone.querySelector(".productImage").src = img;
    productClone.querySelector(".productImage").alt = name;
    productClone.querySelector(".productDescription").innerText = description;
    productClone.querySelector(".productPrice").innerText = `@${price}`;
    productClone.querySelector(".productActualPrice").innerText =  `@${price * 4}`;
    productClone.querySelector(".productStock").innerText = stock;

    productClone.querySelector(".stockElement").addEventListener("click",(event)=>{
         homeQuantityToggle(event, id, stock);
         
    });

    productClone.querySelector(".orderBtn").addEventListener("click",(event)=>{
      addToCard(event,id,stock,price)
    });

    productContainer.append(productClone);  
  });
  
};
