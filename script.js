 //Task - 1 : Hiding Given Notifications

 document.querySelector(".notify-section").style.display = "none";

 //Task-2 : Generating four digit random pin

 document.querySelector(".generate-btn").addEventListener("click",generatePin)
 function generatePin(){
     document.querySelector(".pinValueGenerate").value = Math.ceil(Math.random()*(9999-1000 + 1 ) + 1000);
     document.querySelector(".pinValueGenerate").style.color ="skyblue"
     document.querySelector(".pinValueGenerate").style.fontSize ="20px"
     document.querySelector(".pinValueGenerate").style.textAlign ="center"
     
 }

 //Task -3 : Showing values in input side

 function pinValueAcceptor(x){
     const inputValuePresent = document.querySelector(".inputValueShower")
     inputValuePresent.value = inputValuePresent.value + x;
     inputValuePresent.style.color ="skyblue"
     inputValuePresent.style.textAlign ="center"
     inputValuePresent.style.fontSize ="20px"

 }
 
 //Task- 4 : Showing Notification - Success / Failure

 function submitAction(){
         const assignedInputValue = document.querySelector(".inputValueShower").value

         const generatedPinValue = document.querySelector(".pinValueGenerate").value

         if(assignedInputValue == generatedPinValue){
            document.querySelector(".notify-section").style.display="block"
            document.querySelector(".right").style.display= "block"
            document.querySelector(".wrong").style.display= "none"

            document.querySelector(".action-left").innerText = 'Successfully Done ! No need to try anymore'

         }

         else{

            document.querySelector(".notify-section").style.display="block"
            document.querySelector(".wrong").style.display ="block";
            document.querySelector(".right").style.display ="none";
            document.querySelector(".action-left").style.display ="block"


            const tryLeft = document.querySelector("#tryLeft").innerText
            var newTryLeft = parseInt(tryLeft);
            if(newTryLeft > 0){
                newTryLeft = newTryLeft - 1 ;
            }
            document.querySelector("#tryLeft").innerText = newTryLeft;  
            
            if(newTryLeft == 0){
                document.querySelector(".submit-btn").disabled = true;
            }
        }
        
        document.querySelector(".inputValueShower").value = "" 
    
        
        
}



 //Bonus Task : 'remove last digit' + 'clear all '

 function removeLastDigit(){
     
    const currentValue =  document.querySelector(".inputValueShower").value

   const newCurrentValue = currentValue.substring(0, currentValue.length - 1)

   document.querySelector(".inputValueShower").value = newCurrentValue   
 }


 function clearAll(){
     document.querySelector(".inputValueShower").value = null;
     
 }

 
 

