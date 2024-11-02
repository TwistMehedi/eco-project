import { getLocalStorageProduct } from "./getLocalStorageProduct";
import { updateAddToCard } from "./updateAddToCard";

export const addToCard = (event, id, stock, price) => {
  let localStorageProduct = getLocalStorageProduct();
  const currentProduct = document.querySelector(`#card${id}`);

  let quantity = currentProduct.querySelector(".productQuantity").innerText;
  let productPrice = (currentProduct.querySelector(
    ".productPrice"
  ).innerText = `${price}`);

  price = Number(quantity * productPrice);
  quantity = Number(quantity);
  //  let updateProduct = {id,quantity,price};

  // update method
  const existingProduct = localStorageProduct.find(
    (getExistingPoduct) => getExistingPoduct.id === id
  );

  if (existingProduct && quantity > 1) {
     quantity = existingProduct.quantity + quantity;
    price = Number(quantity * productPrice);
    let updateProduct = {id,quantity,price};
    updateProduct = localStorageProduct.map(currentPod =>{
          return (currentPod.id === id)? updateProduct: currentPod;
         
     });
     localStorage.setItem("productCardLS", JSON.stringify(updateProduct));
  };

  if (existingProduct) {
    return false;
  }
// update method end

  localStorageProduct.push({ id, quantity, price });
  localStorage.setItem("productCardLS", JSON.stringify(localStorageProduct));

  updateAddToCard(localStorageProduct);
};
