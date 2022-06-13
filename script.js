function draggable(id) {
    let box = document.getElementById(id);
    box.style.position = 'fixed';
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
        if (e.clientX < 50 || e.clientX > screen.width - 50) return;
        // console.log("helo");
        // let e = window.event;
        box.style.left = e.clientX - 50 + "px";
        box.style.top = e.clientY - 50 + "px";
    };
}
