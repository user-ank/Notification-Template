let userSelection = document.getElementsByClassName('not');
let userSelectionUnread = document.getElementsByClassName('unread');
let userSelectionDot = document.getElementsByClassName('doti');
let allRead = document.getElementById("read");
let counter = document.getElementById("count");
counter.innerHTML = userSelectionUnread.length;



for(let i = 0; i < userSelection.length; i++) {
  userSelection[i].addEventListener("click", function() {
    
    userSelection[i].classList.forEach(cls => {
        if(cls == "unread")
            counter.innerHTML = userSelectionUnread.length - 1;
    });
    console.log("Clicked index: " + i);
    userSelection[i].classList.remove("unread");
    userSelectionDot[i].classList.remove("dot");    
  })
}

allRead.addEventListener("click", function(){
    for(let i = 0; i < userSelection.length; i++) {
          counter.innerHTML = userSelectionUnread.length;
          console.log("Clicked index: " + i);
          userSelection[i].classList.remove("unread");
          userSelectionDot[i].classList.remove("dot");    
        }
    })