const sideMenu = document.querySelector(".side-menu");
const menuBtn = document.querySelector(".logo");
const closeBtn = document.querySelector(".close-btn");
const display = document.querySelector("main");
const bottomMenu = document.querySelector(".bottom-menu");

menuBtn.addEventListener('click',() => {
    sideMenu.classList.toggle('show-menu');
    display.classList.toggle('showmenu-edit');
})




let lastScrollY = window.scrollY;

window.addEventListener("scroll",()=>{
    if(lastScrollY < window.scrollY){
        bottomMenu.style.display = "none";
    }
    else if(lastScrollY > window.scrollY + 20){
        bottomMenu.style.display = "flex";
        
    }
    lastScrollY = window.scrollY;
})

// document.addEventListener('mouseup',function(e) {
//     if (sideMenu.classList.contains('show-menu')){
//         sideMenu.style.display = 'none';
//         display.classList.remove('showmenu-edit');
//     }
// })
let cookie=document.cookie.toString();

let userName="";
for (let index =cookie.indexOf('=')+1; index < cookie.length; index++) {
    if(cookie[index]=='%'){
        userName+=" ";
        index+=2;
    }
   else{ userName+=cookie[index];}
};
if(userName.length!=0){
    document.querySelector('#login').style.display='none';
    document.querySelector('#userGreet').innerHTML=`Hi ${userName},How are you 😊`
}
console.log(userName);
document.getElementById('logOut').addEventListener('click',()=>{
    
    document.cookie = 'userName' + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
    window.location.reload();

})
setInterval(() => {
    

 {
   let filter=document.querySelector('.search-box>input[type="search"]').value.toUpperCase();
   if(filter.length!=0){ 
  
for(var i=0;i<document.querySelectorAll('a[class~="society"]').length;i++)
{ let content=document.querySelectorAll('a[class~="society"]')[i].textContent.toUpperCase();
console.log(content);
if(content.indexOf(filter)>-1){
    document.querySelectorAll('a[class~="society"]')[i].style.display="";


} else{
    document.querySelectorAll('a[class~="society"]')[i].style.display="none";
}


   }
}

}
if(document.querySelector('.search-box>input[type="search"]').value==0){
    for(var i=0;i<document.querySelectorAll('a[class~="society"]').length;i++){
        document.querySelectorAll('a[class~="society"]')[i].style.display="";
    }
}
}, 1);