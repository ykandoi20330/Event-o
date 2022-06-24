


    



 
document.querySelector("#signUp").addEventListener('click',async ()=>{
    let name=document.getElementById('name').value;
    let email=document.getElementById('email').value;
    let password=document.getElementById('password').value;
    let confirmPassword=document.getElementById('confirmPassword').value;
    let checker=password.toString().localeCompare(confirmPassword);
    let message=document.querySelector('#message');
    if(checker==0){
  await axios.post('/Sign%20In%20page/signup.html',{'name':name,'email':email,'password':password}).then(
	   fetch(window.location.href)).then(data=>{if(data.data.message){
        message.innerHTML="User already Exists";
        message.style.color='red';
       }
    else{ 
        message.innerHTML="Signup successful,kindly login to your account now😍";
        message.style.color='green'; 
       setTimeout(() => {
            window.location.assign((window.location.href).replace('signup','index'));
       }, 4000);
       
        
    }});
     
}
  else{ message.innerHTML="Password doesnot match with confrimPassword"; message.style.color='red';
     setTimeout(() => {
        message.innerHTML=null;   
     }, 2000);
  }
})
