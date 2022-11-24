window.onload = () => {

    let list = document.querySelectorAll(".drag-item");
    let leftZone = document.querySelector(".left");
    let rightZone = document.querySelector(".right");
    let left = [];
    let right = [];

    let logger = document.querySelector(".logger");    
    
    list.forEach(l => {

        if(l.parentElement.classList.contains("left")){
            left.push(l);
        }
        if(l.parentElement.classList.contains("right")){
            right.push(l);
        }

        logger.innerHTML = "Left: " + left.length + " Right: " + right.length;

        l.addEventListener("dragstart", (e)=> {
            e.target.classList.add("selected");          
        });

        l.addEventListener("dragend", (e)=> {
            e.target.classList.remove("selected");            
            if(e.pageX > rightZone.getBoundingClientRect().x) {
                right.push(l);                
                l.remove();
                rightZone.append(l);
                left.pop();
            }
            if (e.pageX < rightZone.getBoundingClientRect().x) {
                left.push(l);                
                l.remove();
                leftZone.append(l);
                right.pop();        
            }
            logger.innerHTML = "Left: " + left.length + " Right: " + right.length;      
        });
      
    }); 

    
}