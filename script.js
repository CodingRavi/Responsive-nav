let leftnav=document.querySelector(".right");
let count="true";
let menu=document.querySelector(".svg");
menu.addEventListener("click",()=>{
        if(count){
            leftnav.style.left="0px";
            // leftnav.classList.add("OnClick");
            count = false;
        }
        else{
            leftnav.style.left="-300px";
            
            // leftnav.classList.remove("OnClick");
            count = true;
        }
})