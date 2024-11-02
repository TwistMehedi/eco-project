export const homeQuantityToggle = (event,id,stock) =>{
    // console.log(id);
    const currentProduct = document.querySelector(`#card${id}`)
    // console.log(currentProduct);
    
    const productQuantity = currentProduct.querySelector(".productQuantity");
    
    let quantity =  parseInt(productQuantity.getAttribute("data-quantity")) || 1;
    //  console.log(quantity);
     
    if(event.target.className === "cardIncreament"){
        if (quantity < stock) {
            quantity += 1;
        }else if(quantity === stock){
            quantity = stock
        };
    };

    if(event.target.className === "cardDecreament"){
        if(quantity > 1){
            quantity -= 1;
        }
    };


    productQuantity.innerText = quantity;
    productQuantity.setAttribute("data-quantity", quantity.toString());
    return quantity;

}