 // let form = document.querySelector("form")

 let Arr_Data =JSON.parse(localStorage.getItem("Add_User_Data")) || []

 function AddData(n,c,e,p)
 {
     this.Name = n;
     this.Contact = c;
     this.Email = e;
     this.Password =p;
 }

 function signupform(){
     event.preventDefault();

     let form = document.getElementById('user_data')
     
     let name = form.name.value;
     //  console.log(name); Code working fine
     let contact = form.contact.value;
         // console.log(contact) code working fine
     let email = form.email.value;        
         // console.log(email); code working fine
     let password = form.password.value;
         // console.log(password); code working fine
         // console.log(contact.length,password.length)
     if(contact.length == 10 && password.length >= 8 )
     {
                 // console.log("store in local")
             let Data_Of_User = new AddData(name,contact,email,password);

             // console.log(Data_Of_User)

             Arr_Data.push(Data_Of_User);
             // console.log(Arr_Data)

             localStorage.setItem("Add_User_Data",JSON.stringify(Arr_Data));

             document.getElementById('name').value = null;
             document.getElementById('contact').value = null;
             document.getElementById('email').value = null;
             document.getElementById('password').value = null;

             alert("Signup Succesfull")
             window.location.href= "login.html";
     } 
     else
     {
         alert("Please Check Your Number & Password")
     }
     
     

 }