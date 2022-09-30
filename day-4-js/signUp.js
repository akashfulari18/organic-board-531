let frm=document.querySelector("form")
frm.addEventListener("submit",submitData)


// console.log(hello)
let userSignUpData=JSON.parse(localStorage.getItem("sign-user"))|| []
function submitData(event){
    // // event.preventDefault();
    event.preventDefault()

    let obj={
       name: frm.userName.value,
       userEmail: frm.userEmail.value,
       userPass: frm.userPass.value
    }

    userSignUpData.push(obj)
    console.log(userSignUpData)
    localStorage.setItem("sign-user",JSON.stringify(userSignUpData))
}