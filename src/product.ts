import React from "react";
// Task 4
// interface for a Product
interface Product{
name:string;
price:number;
}
// function that:Accepts an array of Product objects and Returns the total price of all products.
function calcTotalPrice(products:Product[]):number{
    let totalprice=0;
    products.forEach((product)=>{
        totalprice+=product.price;
    }) ;
return totalprice;
}
// Task 5
// function that accepts a string and checks if it is a valid email address
function isValidEmilAddress(email:string):boolean{
    const emailR=/^[\w]+@[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;
    return emailR.test(email);
}
export default Product;
