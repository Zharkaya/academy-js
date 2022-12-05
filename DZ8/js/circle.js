class Сircle {
    #radius = 0; 
    constructor(radius) {
        this.radius = radius;
    }  
    get radius() {
        return this.#radius;
    }
    set radius(value) {
        if(value>0)
           this.#radius = value;
        else 
           this.#radius = 0;     
    }
    get diametr() {
        return this.#radius * 2;
    }
    area() {
        return Math.PI * Math.pow(this.radius, 2);
    }
    length() { //l = 2πr
        return 2*Math.PI*this.radius;
    }
}

function showCircle() {
    let radius = document.getElementById("radius");
    let btn = document.getElementById("showCircle");
    let out = document.getElementById("out");
    let wrapper = document.querySelector(".wrapper-circle");

    btn.addEventListener("click", ()=>{     
        if(radius.value!=""){
            let circle = new Сircle(radius.value);

            out.style.width = circle.diametr + "px";
            out.style.height = circle.diametr + "px";

            wrapper.innerHTML = `<p>Радиус окружности: ${circle.radius}px</p>
            <p>Диаметр окружности: ${circle.diametr}px</p>
            <p>Площадь окружности: ${circle.area()}px</p>
            <p>Длина окружности: ${circle.length()}px</p>`;
        }
    })

}

showCircle();