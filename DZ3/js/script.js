if(document.getElementById("generate")) {
    document.getElementById("generate").addEventListener("click", ()=> {
        document.getElementById("randomNumber").innerHTML = Math.round(Math.random() * 100);
    })
}

if(document.querySelector(".logger")) {
    document.body.addEventListener("mousemove", (e)=> {
        document.getElementById("mouseMove").innerHTML = "X=" + e.pageX + ", Y=" + e.pageY;
    })
    document.body.addEventListener("click", (e)=> {
        let  p = document.createElement("p");
        p.innerHTML = "Click: X=" + e.pageX + ", Y=" + e.pageY;
        document.getElementById("mouseClik").append(p);
    })
}

if(document.querySelector(".text-block")) {
    let btn = document.getElementById("toggle-text");
    btn.addEventListener("click", ()=> {
        document.querySelector(".text-block p").classList.toggle("non-active");
        btn.classList.toggle("show");
        if(btn.classList.contains("show")) {
            btn.innerHTML = "Show";
        }
        else {
            btn.innerHTML = "Hide";
        }
    })
}

if(document.querySelector(".marks")) {
    let titles = document.querySelectorAll(".t-item");
    let text = document.querySelectorAll(".m-text p");
        
    titles.forEach(element => {
        element.addEventListener("click", function () {
            text.forEach(t => {
                t.classList.remove("active");
                if(this.id === t.getAttribute("data-mark")) {
                   t.classList.add("active");
                }
            });
        })
    });
}

if(document.querySelector(".news-list")) {   
    let btn = document.querySelectorAll(".n-item button");   
    btn.forEach(b => {
        b.addEventListener("click", function() {
            let parent = this.parentElement; //sorry

            //parent.parentElement.classList.add("non-active"); 
            parent.parentElement.remove();
        })
    });
}

if(document.querySelector(".bar-block")) {
    let btn = document.getElementById("addProgress");
    let bar = document.querySelector(".bar");   
    let width= 0;  
    btn.addEventListener("click", ()=> {              
        width += 5;
        if(width<=100) {
            bar.style.width = width + "%"; 
        }              
    })
}
