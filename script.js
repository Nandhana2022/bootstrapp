function validateName(){
   
    let username=document.getElementById('username')
   
    console.log(username.value)
    if(username.value.trim() == ''){
        alert("Field blank")
    }}
    function ValidateEmail(){
        let username=document.getElementById('username')
        console.log(username.value)
        var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
     if (username.value.match(validRegex)) {
  
        alert("Valid email address!");
    
       document.form1.text.focus();
    
        return true;
    
      } else {
    
        alert("Invalid email address!");
        
        document.form1.text.focus();
    
        return false;
    
            }      }
      
           
            let passwordInput = document.querySelector('#passwordInput input[type="password"]');
            let passwordStrength= document.getElementById('passwordStrength');
            let poor = document.querySelector('#passwordStrength #poor');
            let weak = document.querySelector('#passwordStrength #weak');
            let strong = document.querySelector('#passwordStrength #strong');
            let passwordInfo = document.getElementById('passwordInfo');
          
            let poorRegExp = /[a-z]/;
            let weakRegExp = /(?=.*?[0-9])/;;
            let strongRegExp = /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/;
            let whitespaceRegExp = /^$|\s+/;
           
        
            passwordInput.oninput= function(){
           
                 let passwordValue= passwordInput.value;
                 let passwordLength= passwordValue.length;
        
                 let poorPassword= passwordValue.match(poorRegExp);
                 let weakPassword= passwordValue.match(weakRegExp);
                 let strongPassword= passwordValue.match(strongRegExp);
                 let whitespace= passwordValue.match(whitespaceRegExp);
        
         if(passwordValue != ""){
        
             passwordStrength.style.display = "block";
             passwordStrength.style.display = "flex";
             passwordInfo.style.display = "block";
             passwordInfo.style.color = "black";
        
             if(whitespace)
             {
              passwordInfo.textContent = "whitespaces are not allowed";
             }else{
             poorPasswordStrength(passwordLength, poorPassword, weakPassword, strongPassword);
             weakPasswordStrength(passwordLength, poorPassword, weakPassword, strongPassword);
             strongPasswordStrength(passwordLength, poorPassword, weakPassword, strongPassword);
            }
        
             
           }else{
             
             passwordStrength.style.display = "none";
             passwordInfo.style.display = "none";
            
           }
         }
        
        function poorPasswordStrength(passwordLength, poorPassword, weakPassword, strongPassword){
        
              if(passwordLength <= 3 && (poorPassword || weakPassword || strongPassword))
                {
               poor.classList.add("active");
               passwordInfo.style.display = "block";
               passwordInfo.style.color = "red";
               passwordInfo.textContent = "Your password is too Poor";
                  
                }
        }
        
        function weakPasswordStrength(passwordLength, poorPassword, weakPassword, strongPassword){
           if(passwordLength>= 4 && poorPassword && (weakPassword || strongPassword))
            {
             weak.classList.add("active");
             passwordInfo.textContent = "Your password is Weak";
             passwordInfo.style.color = "orange";
           
           }else{
             weak.classList.remove("active");
             
           }
        }
        
        function strongPasswordStrength(passwordLength, poorPassword, weakPassword, strongPassword){
        
          if(passwordLength >= 6 && (poorPassword && weakPassword) && strongPassword)
            {
             poor.classList.add("active");
             weak.classList.add("active");
             strong.classList.add("active");
             passwordInfo.textContent = "Your password is strong";
             passwordInfo.style.color = "green";
           }else{
             strong.classList.remove("active");
             
           }
        }
        
        let showHide = document.querySelector('#passwordInput #showHide');
        
         showHide.onclick = function(){
              showHidePassword()
        }
        
        function showHidePassword(){
          if(passwordInput.type == "password"){
            passwordInput.type = "text";
            showHide.textContent = "HIDE";
            showHide.style.color = "green";
          }else{
            passwordInput.type = "password";
            showHide.textContent = "SHOW";
            showHide.style.color = "red";
          }
        }
        
        function validate_password() {
 
          var pass = document.getElementById('pass').value;
          var confirm_pass = document.getElementById('confirm_pass').value;
          if (pass != confirm_pass) {
              document.getElementById('wrong_pass_alert').style.color = 'red';
              document.getElementById('wrong_pass_alert').innerHTML
                = '☒ Use same password';
              document.getElementById('create').disabled = true;
              document.getElementById('create').style.opacity = (0.4);
          } else {
              document.getElementById('wrong_pass_alert').style.color = 'green';
              document.getElementById('wrong_pass_alert').innerHTML =
                  '🗹 Password Matched';
              document.getElementById('create').disabled = false;
              document.getElementById('create').style.opacity = (1);
          }
      }

      function wrong_pass_alert() {
          if (document.getElementById('pass').value != "" &&
              document.getElementById('confirm_pass').value != "") {
              alert("password is same");
          } else {
              alert("Please fill all the fields");
          }
          
      } 
      

      function phonenumber(inputtxt)
      {
        var phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
        if(inputtxt.value.match(phoneno))
              {
            return true;
              }
            else
              {
              alert("wrong phone number");
              return false;
              }
      }

   
  
   