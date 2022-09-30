import product from "./prod.json" assert { type:"json" }


disp2(product)

function disp2(data){
    data.forEach((el,i) => {

        let mainDiv=document.createElement("div")
        
        let img=document.createElement("img")
        img.src=el.image

        // let topCorner=document.createElement("img")
        // topCorner.src="https://img.gkbcdn.com/s3/l/label/Label1.png?version=20220930"
        
        // let subDiv=document.createElement("div")
        // subDiv.append(topCorner)
       
        
        let prodName=document.createElement("p")
        prodName.innerText=el.productName

        let fStar=document.createElement("img")
        fStar.src=el.f_star
        fStar.setAttribute("id","star")

        let prodPrice=document.createElement("p")
        prodPrice.innerText="₹"+el.price
        
        mainDiv.append(img,prodName,fStar,prodPrice)
        document.querySelector(".new-product").append(mainDiv)

        
    });
}