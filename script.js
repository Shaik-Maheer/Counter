
let counter = document.getElementById("counter");
function increment(){
   let current = parseInt(counter.textContent);
   let updated =(current) + 1 ;
   counter.textContent = updated;
   if (updated>0){
    counter.style.color = "darkgreen";
   }
   else if(updated<0){
    counter.style.color="red";
   }
   else{
    counter.style.color = "black";
   }
   
}
function decrement(){
   let current = parseInt(counter.textContent);
   let updated =(current) - 1 ;
   counter.textContent = updated;
   if (updated<0){
    counter.style.color = "red";
   }
   else if(updated>0){
    counter.style.color="green";
   }
   else{
    counter.style.color = "black";
   }         
}
function reset(){
   counter.textContent = parseInt(0);
   counter.style.color="black"
   
}
