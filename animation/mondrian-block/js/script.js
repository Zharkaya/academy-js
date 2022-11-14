window.onload = () =>{
    let canvas = document.querySelector("canvas");
    let context = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight - 50;

    canvas.style.background = "#e1e1e1";

    let colors = ["#ec140f", "#f5d219", "#170dac", "#e1e1e1"];
  
    let lines = [];

    function drawline(x, y) {

        context.beginPath();      
        
        context.moveTo(x, y);
        context.lineTo(x, 0);

        context.moveTo(x, y);
        context.lineTo(0, y);        

        context.moveTo(x, y);
        context.lineTo(x, canvas.height);

        context.moveTo(x, y);
        context.lineTo(canvas.width, y);

        context.stroke(); 

        context.closePath();
    }

    function fillSqr(x1, y1, x2, y2) {         

        context.rect(x1,y1, x2 - x1, y2 - y1);
        context.fill();
        context.lineWidth = 8;
        context.strokeStyle = "#0f0408";
        context.stroke();        

    }

    function drawOnClick(e) {        
            
            let loc = {x : e.clientX, y: e.clientY}; 

            lines.push(loc);             
            
            let curLoc = [];
            curLoc.push(lines[lines.length-1]);
            curLoc.push(lines[lines.length-2]);       
            
            drawline(loc.x, loc.y);        

            context.fillStyle = colors[Math.round(Math.random() * colors.length - 1)];
            if(context.fillStyle === "#000000") {
                context.fillStyle = "#e1e1e1";
            }

            if (lines.length == 1) {
                fillSqr(0, canvas.height, lines[0].x, lines[0].y);
                fillSqr(canvas.width, 0, lines[0].x, lines[0].y);
            }

            if (lines.length > 1) {              
                fillSqr(curLoc[0].x, curLoc[0].y, curLoc[1].x, curLoc[1].y);           
            }
   
        
    }

    function clear(context) {        
        context.clearRect(0, 0, canvas.width, canvas.height);
        lines.length = 0;
    }    

    let cross1 = document.querySelector(".cross");
    let cross2 = document.querySelector(".cross-1");

    function onMouseMove (e) {
        MoveAt(e.clientX, e.clientY);
    }

    function MoveAt(pageX, pageY) {
        cross1.style.top = pageY + "px";
        cross1.style.width = pageX + 8 + "px";
        cross2.style.left = pageX + "px";
        cross2.style.height = pageY + 8 + "px";
        cross2.style.heigh = pageY + "px"; 
    }  

    canvas.addEventListener("click", (e)=>{  drawOnClick(e) }); 

    document.querySelector("#clear").addEventListener("click", () => { clear(context) });
}