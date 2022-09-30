"use strict";

import users from  '../MOCK_DATA.json' assert {type:"json"}

console.log(users) 
disp(users)
function disp(data){
for(let i=0;i<4;i++){
    let div2=document.createElement("div")
        
        let img=document.createElement("img")
        img.src=data[i].image
        img.style.height="100px"
        img.style.width="100px"

        let percentOff=document.createElement("h5")  
        percentOff.innerText=data[i].percentOff +"% OFF"

        let price=document.createElement("h4")
        price.innerText= "₹"+data[i].price
      
        let stk=document.createElement("h6")   
        stk.innerText="₹"+data[i].stkPrice
        stk.style.textDecoration="line-through"

      
        div2.append(img,percentOff,price,stk)
        document.querySelector(".row-2").append(div2)
       


    
}
for(let i=0;i<4;i++){
    let div1=document.createElement("div")
    
        
        let img=document.createElement("img")
        img.src=data[i].image
        img.style.height="100px"
        img.style.width="100px"

        let percentOff=document.createElement("h5")  
        percentOff.innerText=data[i].percentOff +"% OFF"

        let price=document.createElement("h4")
        price.innerText= "₹"+data[i].price
      
        let stk=document.createElement("h6")   
        stk.innerText="₹"+data[i].stkPrice
        stk.style.textDecoration="line-through"

        div1.append(img,percentOff,price,stk)
        
        document.querySelector(".row-1").append(div1)


    
}
}


import midCarousel from "../images_for_carousel.json" assert {type:"json"}

console.log(midCarousel)

display(midCarousel)

function display(data){
    data.forEach(el => {
     console.log(el)

        let mainDiv=document.createElement("div")

     

        let subDiv_1 =document.createElement("img")
        subDiv_1.src=el.image1

        let prod=document.createElement("p")  
        prod.innerText=el.info

        let price=document.createElement("span")
        price.innerText= "₹"+el.price
        price.style.fontWeight="bold"
        
        

      
        mainDiv.append(subDiv_1,prod,price)

        document.querySelector(".carusel").append(mainDiv)

        
    });
}

