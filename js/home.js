let data=require("../MOCK_DATA.json")
let arr=JSON.stringify(data)
// arr.push(data)
console.log(data)
disp(data)
function disp(data1){
    data1.forEach(el => {
        let td1=document.createElement("div")
        
        let img=document.createElement("img")

        img.src="https://img.gkbcdn.com/p/2019-09-27/tronsmart-element-t6-mini-bluetooth-5-0-speaker---black-1571994046957._w280_p1_.jpg"
        img.style.height="100px"
        img.style.width="100px"

        td1.append(img)
        document.querySelector("deals_product").append(td1)
    });
}





