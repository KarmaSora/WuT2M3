let allPtags = document.querySelectorAll('p');

function init(){
    let allPtags = document.querySelectorAll('p');
    for (let i = 0; i < allPtags.length; i++) {

        allPtags[i].onmouseenter = function(e) {
         //   let currentTArgetsColor = e.target.style.backgroundColor;
            console.log('a backgroundColor has changed');
            e.target.style.backgroundColor = "grey";
           
            /** 
            if(  currentTArgetsColor == "grey" ){
                e.target.style.backgroundColor = "red";
            }
            else if(  currentTArgetsColor == "red" ){
                e.target.style.backgroundColor = "blue";
            }
            else if(  currentTArgetsColor == "blue" ){
                e.target.style.backgroundColor = "grey";
            }*/
            
        }

        allPtags[i].onmouseleave = function(e) {
            //   let currentTArgetsColor = e.target.style.backgroundColor;
               console.log('a backgroundColor has changed to normal');
               e.target.style.backgroundColor = "";       
           }
    }

}


window.onload= init;







