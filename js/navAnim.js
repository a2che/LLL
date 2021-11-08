const navbar = document.querySelector("nav")
        const stay = 120
        console.log(stay)
        const CLAY_TOP = "10px"

        window.addEventListener("scroll",function(){
            if(stay <= window.pageYOffset){
                navbar.style.position = "fixed";
                navbar.style.top = CLAY_TOP
            }else{
                navbar.style.position = null;
                navbar.style.top = null;
            }
        })