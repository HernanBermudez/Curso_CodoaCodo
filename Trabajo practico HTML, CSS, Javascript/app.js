function clickCounter() {
    if(typeof(Storage) !== "undefined") {
      if (sessionStorage.clickcount) {
          if (sessionStorage.clickcount == 1){
            sessionStorage.clickcount = Number(sessionStorage.clickcount)-1;
          }
          else{
            sessionStorage.clickcount = Number(sessionStorage.clickcount)+1;
          }
      }else {
        sessionStorage.clickcount = 1;
      }
        document.getElementById("menu").innerHTML = "Galeria";
        displayMenu();
    } else {
      document.getElementById("menu").innerHTML = "Sorry, your browser does not support web storage...";
    }
    return sessionStorage.clickcount;
}

function displayMenu(){

    if(sessionStorage.clickcount % 2 != 0){
        //document.getElementById("myContainer").style.gridTemplateRows = 
        //"1fr 4fr 10fr 5fr";
        //document.getElementById("imagenMain").style.gridRow = 3;
        //document.getElementById("aside").style.gridRow = 3;
        //document.getElementById("menu").style.gridRow = 2;
        document.getElementById("menu").style.opacity = 1;
        //document.getElementById("footer").style.gridRow = 4;
    }
    else{
        
        document.getElementById("myContainer").style.gridTemplateRows = 
        "1fr 10fr 5fr";
        document.getElementById("imagenMain").style.gridRow = 2;
        document.getElementById("aside").style.gridRow = 2;
        document.getElementById("menu").style.opacity = 0;
    }
}

function onMouseOver(element, color){

        element.style.color = color;
}

