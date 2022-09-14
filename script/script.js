var menu= document.getElementById('menu');
var menuContent=document.getElementById('menu-content')
var closeMenu=document.getElementById('close-menu')
var navList=document.querySelector('.nav-links')
var cardParent=document.getElementsByClassName('card-header')

console.log(cardParent.nextElementSibling)

menu.addEventListener('click', showMenu)
closeMenu.addEventListener('click', hideMenu)

function showMenu(){
    menuContent.style.visibility= 'visible';
}
closeMenu.addEventListener('click', hideMenu)
function hideMenu(){
    menuContent.style.visibility= 'hidden';
}

for(var i=0; i<cardParent.length;i++){
    cardParent[i].addEventListener('click',function(){
       var content=this.nextElementSibling
       if(content.style.display==='block'){
        content.style.display='none'
       }else{
        content.style.display='block'
       }
    })
}
