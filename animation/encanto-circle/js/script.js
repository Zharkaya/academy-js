window.onload = () => {
    let canvas = document.querySelector("canvas");
    let context = canvas.getContext("2d");

    let colors = ["#D64D2F", "#E59786", "#F38E23", "#23F336", "#F323BD", "#B423F3", "#23F394", "#EDC7F5"]

    canvas.style.background = "#bbf";

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let dx = 0;
    let dy = 0;


    class Point {
        constructor(x, y, r, c) {
            this.x = x;
            this.y = y;
            this.r = r;           
            this.c = c;
        }

        draw(context) {
            context.beginPath();
            context.arc(this.x, this.y, this.r, 0, Math.PI * 2, false);            
            context.fillStyle = this.c;
            context.fill();
            context.stroke();
            context.closePath();
        }

        move(context) {           
            //context.clearRect(0, 0, canvas.width, canvas.height);
            this.draw(context);
            this.x += dx;
            this.y += dy;

        }

        clear(context) {
            context.clearRect(0, 0, canvas.width, canvas.height);
        }


    }   

    canvas.addEventListener("mousemove", (e) => {

        let mX = -1;
        let mY = -1;

       
        if(e.pageX > canvas.width/2) {
           mX = 1;
             
        } 
        if(e.pageY > canvas.height/2) {           
           mY = 1;        
        }
             

        

        dx = 10 * mX;         //n[Math.round(Math.random())];  
        dy = 10 * mY;        
        let circle = new Point(e.pageX, e.pageY, 5, colors[ Math.round(Math.random() * colors.length)]);
        let id = setInterval(() => {           
            circle.move(context);
        }, 1);   
    })

}