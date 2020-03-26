
function randomNumber(){
  
  
  let random = Math.ceil(Math.random() * 10);
  console.log(random);
  return random;
}
  
function click(){
  let c = 3;
  return c;
}

c = click();
random = randomNumber();

// FUNCTION STARTS
let submit = document.querySelector(".submit");
submit.addEventListener("click",() => {

 
  let numberInput = parseInt(document.querySelector(".numberInput").value);


  if(random === numberInput){

    document.querySelector(".numberInput").classList.add("right");
    

    let msg = document.querySelector(".msg");
    msg.classList.add("msgright");
    
    msg.textContent = `${numberInput} is correct guess.`;

    document.querySelector(".numberInput").setAttribute("disabled", true);
    document.querySelector(".submit").style.display = "none";
    document.querySelector(".again").style.display = "inline-block";

  }else{



      let clear = document.querySelector(".numberInput");
      clear.classList.add("wrong");

      clear.value="";
      
      let i = --c;
          
      if(i>0){
        
        let msg = document.querySelector(".msg");
        msg.classList.add("msgwrong");

        msg.textContent = `${numberInput} is not correct, you have ${i} guesses left.`;
       
  
      }else{
        
        let msg = document.querySelector(".msg");
        msg.classList.add("msgwrong");

        msg.textContent = `${numberInput} is not correct, Game Over.`;

        document.querySelector(".numberInput").setAttribute("disabled", true);
        document.querySelector(".submit").style.display = "none";
        document.querySelector(".again").style.display = "inline-block";
        document.querySelector(".numberInput").classList.remove("wrong");
  
      }


    }

});



let again = document.querySelector(".again");

again.addEventListener("click", () => {

  
  window.location.reload();
  
  
});

