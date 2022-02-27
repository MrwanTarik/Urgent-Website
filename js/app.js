let listItems = document.querySelector('.links-container ul');
let menu = document.querySelector('.toggler-mobile');
let overLay = document.querySelector('header .overlay');
let toTop =document.querySelector('header .to-top');
menu.addEventListener('click',() => {
    listItems.style="left:0;";
    overLay.style.display ="block"
})
overLay.addEventListener('click',function(){
    listItems.style="left:-275px;";
    overLay.style.display ="none"
});
window.addEventListener('scroll',function(){
    if(this.window.scrollY > 600){
        toTop.style.display="block"
    } else {
        toTop.style.display="none"
    }
})
toTop.addEventListener('click',function(){
    window.scrollTo({
        top:0,
        left:0
        
    })
})