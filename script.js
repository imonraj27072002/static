function draggable(id) {
    let box = document.getElementById(id);
   
    let clicked = false;
   

    box.onmousedown = () => {
        console.log("ok");
        clicked = true;
    };

    document.onmouseup = () => {
        console.log("ooop");
        clicked = false;
    };
    document.onmousemove = (e) => {
        if (!clicked) return;
        if (e.clientX < box.clientWidth/2 || e.clientX > screen.width - box.clientWidth/2) return;
        if (e.clientY < box.clientHeight/2 || e.clientY > screen.width - box.clientHeight/2) return;
     
        
        box.style.left = e.clientX - box.clientWidth/2 + "px";
        box.style.top = e.clientY - box.clientHeight/2 + "px";
    };
}
