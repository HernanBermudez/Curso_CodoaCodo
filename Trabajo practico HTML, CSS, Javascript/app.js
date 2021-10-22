
function clickCounter() {
    if(typeof(Storage) !== "undefined") {
      if (sessionStorage.clickcount) {
          
        sessionStorage.clickcount = Number(sessionStorage.clickcount)+1;
        displayMenu();

      }else {
        sessionStorage.clickcount = 1;
      }  
    } else {
      document.getElementById("menu").innerHTML = "Sorry, your browser does not support web storage...";
    }
    return sessionStorage.clickcount;
}

function displayMenu(){

    if(sessionStorage.clickcount % 2 != 0){
        
        document.getElementById("menu").style.opacity = 1;
        
    }
    else{
        
        document.getElementById("menu").style.opacity = 0;
    }
}

function onMouseOver(element, color){

        element.style.color = color;

}