


let btn = document.querySelector("#jsSwitch")

.addEventListener("click", function(){
 
  let body = document.querySelector("body")

  let Audio = document.querySelector("#switch-js")

    body.classList.add("switch-on")

    Audio.play()

  if (Audio.muted) {

   
      Audio.muted = "";

      document.getElementById('jsSwitch').style.borderStyle = 'inset';

      document.getElementById('jsSwitch').style.backgroundColor = '#EA1179';

  } else {
      
    
      Audio.muted = "true";


      document.getElementById('jsSwitch').style.borderStyle = 'outset';

      document.getElementById('jsSwitch').style.backgroundColor = '#snow';
  }

  
})







