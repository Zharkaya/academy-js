cngColor();
movecursore();
MoveRigthClick();
MoveLeftClick();
MoveWheel();

function cngColor() {
    let colorBlock = document.querySelectorAll(".color");    
    let out = document.getElementById("out");

    let cursor = document.querySelector("#cursor div");

    colorBlock.forEach(el => {
        el.addEventListener("mouseover", function(e) {
            out.style.background = e.target.style.background;
            cursor.style.background = e.target.style.background;
            
        })
        el.addEventListener("mouseout", function() {
            out.style.background = "transparent";
            cursor.style.background = "transparent";
        });   
    });
}

function movecursore() {
    let cursor = document.getElementById("cursor");
    document.body.addEventListener("mousemove", (e)=> {
        cursor.style.top = e.pageY + "px";
        cursor.style.left = e.pageX + "px";
    })
}

function MoveRigthClick() {
    let block = document.getElementById("b1");
    document.body.addEventListener("contextmenu", (e)=> {
        e.preventDefault();
        block.style.position = "absolute";
        block.style.top = e.pageY + "px";
        block.style.left = e.pageX + "px";
    });
}

function MoveLeftClick() {
    let block = document.getElementById("b2");
    document.body.addEventListener("click", (e)=> {
        e.preventDefault();
        block.style.position = "absolute";
        block.style.top = e.pageY + "px";
        block.style.left = e.pageX + "px";
    });
}

function MoveWheel() {
    let block = document.getElementById("b3");
    let wheel = 0
    document.body.addEventListener("wheel", (e)=> {
        wheel += e.deltaY;
        block.style.position = "relative";
        block.style.top = wheel + "px";
    })
}