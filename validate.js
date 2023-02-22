document.querySelector("register").addEventListener("click", confirm);
           function validate() {    
            var fname = document.registration.fname;    
            var phone = document.registration.phone;    
            var email = document.registration.email; 
            var password = document.registration.password.value; 
            var cPassword = document.registration.cPassword;   
            var zip = document.registration.zip; 
            
            if (fname.value.length <= 0) {    
                alert("Name is required");    
                return false;    
            } 
            if (phone.value.length <= 0) {    
                alert("Phone number is required");    
                return false;    
            } 
            if (email.value.length <= 0) {    
                alert("Email Id is required");    
                return false;    
            }             
            if (!(password.length >= 8 && password.length <= 12)) {    
                alert("Password of length 8 to 12 is required");    
                return false;    
            }
            if (cPassword.value != password) {    
                alert("Password does not match");    
                return false;    
            } 
               
             if (zip.value.length != 0 && zip.value.length != 6) {    
                alert("Zip code is invalid");    
                return false;    
            }  
            if(!document.getElementById('1').checked && !document.getElementById('2').checked && !document.getElementById('3').checked && !document.getElementById('4').checked) {   
                alert("Select a plan");
                return false;  
            }  
            if(!document.getElementById('terms').checked) {   
                alert("Agree to terms and conditions");
                return false;  
            }                
            return true;    
        }    
        const confirm = () => {
            let val = validate()
            if(val == true)
            {
                return true;
            }
            return false;
        }