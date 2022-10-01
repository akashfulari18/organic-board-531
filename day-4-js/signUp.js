let frm = document.querySelector("form")
frm.addEventListener("submit", submitData)


// console.log(hello)
// let userSignUpData = JSON.parse(localStorage.getItem("sign-user")) || []
function submitData(event) {
    // // event.preventDefault();
    event.preventDefault()

    let obj = {
        name: frm.userName.value,
        userEmail: frm.userEmail.value,
        userPass: frm.userPass.value
    }

    localStorage.setItem("sign-user", JSON.stringify(obj))
    alert("signup Successful")
    window.location.href = "/organic-board-531/signIn.html";
}