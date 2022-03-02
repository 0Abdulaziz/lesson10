var elForm = document.querySelector(".form");
var elInput = document.querySelector(".form__input");
var elSpan = document.querySelector(".span");

var son1 = []
var son2 = []

elForm.addEventListener("submit",function(evt){
   evt.preventDefault()

   if (elInput.value <= 0 || isNaN(elInput.value)){

      elSpan.textContent = "0 dan katta son kiriting";
     
   }
   else if(elInput.value % 2 == 0 ){
   elSpan.textContent = elInput.value +"soni juft"
   son1.push(elInput.value);
   console.log(son1);
   
   }
   else{
    elSpan.textContent = elInput.value + " soni toq";
    son2.push(elInput.value);
    console.log(son2);
    
   }
   elInput.value = "";
})