
      let signupBtn = document.getElementById("signupBtn");
      let signinBtn = document.getElementById("signinBtn");
      let nameField = document.getElementById("nameField");
      let title = document.getElementById("title");

      signinBtn.onclick = function(event){
          nameField.style.maxHeight = "0";
          title.innerHTML = "Sign In";
          signupBtn.classList.add("disable");
          signinBtn.classList.remove("disable");
          event.preventDefault();
          }
      signupBtn.onclick = function(){
          nameField.style.maxHeight = "65px";
          title.innerHTML = "Sign Up";
          signupBtn.classList.remove("disable");
          signinBtn.classList.add("disable");
          }
