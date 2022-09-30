

import product from "./prod.json" assert { type:"json" }

console.log(product)

disp(product)

function disp(data){
    data.forEach((el,i) => {

        let mainDiv=document.createElement("div")
        
        let img=document.createElement("img")
        img.src=el.image
        
        let topCorner=document.createElement("img")
        topCorner.src="https://img.gkbcdn.com/s3/l/label/Label1.png?version=20220930"
        
        let subDiv=document.createElement("div")
        subDiv.append(topCorner)
       
        
        let prodName=document.createElement("p")
        prodName.innerText=el.productName


        let prodPrice=document.createElement("span")
        prodPrice.innerText="₹"+el.price
        
        mainDiv.append(img,subDiv,prodName,prodPrice)
        document.querySelector(".new-product").append(mainDiv)

        
    });
}