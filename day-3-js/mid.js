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
