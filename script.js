function draggable(id) {
    let box = document.getElementById(id);
   
    let clicked = false;
   

    box.onmousedown = () =&gt; {
        console.log("ok");
        clicked = true;
    };

    document.onmouseup = () =&gt; {
        console.log("ooop");
        clicked = false;
    };
    document.onmousemove = (e) =&gt; {
        if (!clicked) return;
        if (e.clientX &lt; box.clientWidth/2 || e.clientX &gt; screen.width - box.clientWidth/2) return;
        if (e.clientY &lt; box.clientHeight/2 || e.clientY &gt; screen.width - box.clientHeight/2) return;
     
        
        box.style.left = e.clientX - box.clientWidth/2 + "px";
        box.style.top = e.clientY - box.clientHeight/2 + "px";
    };
}
