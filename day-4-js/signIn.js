let frm = document.querySelector("form")
frm.addEventListener("submit", getData)


function getData(event) {
    event.preventDefault();

    const { name, userEmail, userPass } = JSON.parse(localStorage.getItem("sign-user"))
    const fromEmail = frm.userEmail.value
    const fromPass = frm.userPass.value

    if (fromEmail === userEmail && fromPass === userPass) {
        alert("Login Successful")

    } else {
        alert("login fail enter correct credencial")
    }

}


