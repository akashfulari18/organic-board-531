function saveBig() {
  document.getElementById("saveBig").style.visibility = "visible";
}
function hideBig() {
  document.getElementById("saveBig").style.visibility = "hidden";
}
function saveBig1() {
  document.getElementById("saveBig1").style.visibility = "visible";
}
function hideBig1() {
  document.getElementsByClassName("in-save-big1").style.visibility = "hidden";
}

function saveBig2() {
  document.getElementById("saveBig2").style.visibility = "visible";
}
function hideBig2() {
  document.getElementById("saveBig2").style.visibility = "hidden";
}
function saveBig3() {
  document.getElementById("saveBig3").style.visibility = "visible";
  // const saveBig = document.getElementById("saveBig")
  // saveBig.innerHTML = `<div style="background-color:red">jayesh</div>`
}
function hideBig3() {
  document.getElementById("saveBig3").style.visibility = "hidden";
}


function handleSignIn() {
  window.location.href = "/organic-board-531/signIn.html";
}

function handleShowVisible() {
  document.getElementById("showElement").style.visibility = "visible";
  // document.getElementsByClass("ascendancy_show").style.visibility = "visible"
  // document.getElementsByClass("ascendancy_show").style.display = "flex"
}



function goHome(){
  // console.log("home ")
  window.location.href = "/organic-board-531/index.html";

}

// show categories

function showCategories(){
   if(document.getElementById("all-categories").style.visibility="hidden"
  ){
    document.getElementById("all-categories").style.visibility="visible"
  }
  

}

function hideCategories(){
  if(document.getElementById("all-categories").style.visibility="visible"
  ){
    document.getElementById("all-categories").style.visibility="hidden"
  }
}