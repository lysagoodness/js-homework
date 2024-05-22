function checknumber(){
    let number =
    parseInt(document.getElementById("num").value);
    let wlecomeMessage = document.getElementById("output");
    if (number == 1  ){
        wlecomeMessage.textcontent = "January";
    } else if(number == 2) {
        wlecomeMessage.textContent = "February";

    } else if(number == 3){
        wlecomeMessage.textContent ="March";

    } else if(number == 4){
        wlecomeMessage.textContent ="April";

    } else if(number == 5){
        wlecomeMessage.textContent ="May";

    } else if(number == 6){
        wlecomeMessage.textContent = "June";

    } else if(number == 7){
        wlecomeMessage.textContent = "July";

    } else if (number == 8){
        wlecomeMessage.textContent = "August";

    } else if(number == 9){
        wlecomeMessage.textContent = "September";

    } else if(number ==10){
        wlecomeMessage.textContent ="October";

    } else if(number == 11){
        wlecomeMessage.textContent ="Novmber";

    } else if(number == 12){
        wlecomeMessage.textContent ="December";

    } else{
        wlecomeMessage.textContent = "invalid number";
    }


    
    }

