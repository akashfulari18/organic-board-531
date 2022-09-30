let frm=document.querySelector("form")
frm.addEventListener("submit",getData)


function getData(event){
    event.preventDefault();

    // let obj={
        
        let user_Email= frm.userEmail.value
        let user_Pass =frm.userPass.value
    //  }

    
    // user check
    
    check(userSignUpData)
    function check(data){
         data.forEach((el,i) => {
             
            let btn=document.querySelector("#signin")
            btn=addEventListener("click",function (){
                checkUser(el)
            })

            

         });
       }

       function checkUser(el){
        console.log(el)
        if(el.userEmail==user_Email){
            console.log("success")
        }else{
            console.log("not");
        }
       }
}      


let userSignUpData=JSON.parse(localStorage.getItem("sign-user"))|| []
// console.log(userSignUpData)


