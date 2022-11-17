// 1

let hello = () =>{
    let name = document.querySelector("#name");
    let btn = document.getElementById("name-sbn");
    btn.addEventListener("click", ()=> {
        if( name.value)
            document.getElementById("helo").innerHTML = "Привет, " + name.value + "!";        
    })}

hello();

//2
let year = (year) => {
    //let year = 2022;
    let yearUser = document.getElementById("year");
    let btn = document.getElementById("year-sbn");

    btn.addEventListener("click", ()=> {
       let cur = year - yearUser.value
       if(yearUser.value) 
            document.getElementById("year-out").innerHTML = "Если вы не знали, то вам уже " +  cur;        
    })
}

let y = new Date();

year(y.getFullYear());

//3
let sqr = () =>{
    let sqr = document.getElementById("sqr");
    let btn = document.getElementById("sqr-sbn");
    btn.addEventListener("click", ()=> {       
        if(sqr.value){
            let P = sqr.value * 4;
            let sqrDiv = document.getElementById("sqr-d");
            sqrDiv.style.width = sqr.value + "px";
            sqrDiv.style.height = sqr.value + "px";
            document.getElementById("sqr-out").innerHTML = "Периметр этого квадрата равен " +  P + " px";

        } 
     })
}

sqr()

//4
let radius = () => {
    let radius = document.getElementById("radius");
    let btn = document.getElementById("radius-sbn");

    btn.addEventListener("click", ()=> {
        if(radius.value){
            let d = radius.value*2;
            let sOut = document.getElementById("radius-out");
            let s = Math.PI * Math.pow(radius.value, 2);
            let radiusD = document.getElementById("radius-d");
            radiusD.style.width = d + "px";
            radiusD.style.height = d + "px";            
            sOut.innerHTML = "Площадь этой окружности " + s + " px2";
        }
    })
}
radius();

//5
let km = () => {
    let S = document.getElementById("s");
    let T = document.getElementById("t");
    let btn = document.getElementById("v-sbn");

    btn.addEventListener("click", ()=> {
        if(S.value || T.value) {
            //V = S / T;
            let V = S.value/T.value;
            document.getElementById("v-out").innerHTML = "Скорость движения должна быть " + V + " км\\ч";
        }
    })

}

km();

//6
let doll = () => {
    let rub = document.getElementById("rub");
    let btn = document.getElementById("rub-sbn");

    let curs_po_CB = 60.22

    btn.addEventListener("click", ()=> {
        if (rub.value) {
            let dollar = rub.value/curs_po_CB;
            document.getElementById("rub-out").innerHTML = "У вас целых " + dollar.toFixed(2) + " $";
        }
    })
}

doll();

//7
let gb = () => {
    let gb = document.getElementById("gb");
    let btn = document.getElementById("gb-sbn");

    btn.addEventListener("click", ()=> {
        let MB = (gb.value * 1024)/820;
        document.getElementById("gb-out").innerHTML = "Сюда войдет " + Math.round(MB) + " файлов объемом 820 MB"
    })
}

gb();

//8
let chok = () => {
    let money = document.getElementById("money");
    let price = document.getElementById("price");
    let btn = document.getElementById("price-sbn");

    btn.addEventListener("click", ()=> {
        if(money.value || price.value) {
            let chok = Math.floor(money.value/price.value);
            let s = price.value*chok
            let sda = money.value - s;
            document.getElementById("price-out").innerHTML = "Вы можете купить " + chok + " шоколадок. Ваша сдача будет " + sda + " рублей";
        }
    })
}

chok();

//9
let number = () =>{
    let number = document.getElementById("number");
    let btn = document.getElementById("number-sbn");
    btn.addEventListener("click", ()=>{
        if(number.value) {
           let out = number.value.split("").reverse();           
           document.getElementById("number-out").innerHTML = out.join("");
        }
    })
}
number();

//10
let even = () => {
    let number = document.getElementById("even");
    let btn  = document.getElementById("even-btn");
    btn.addEventListener("click", ()=>{
        if(number.value) {
            let out = number.value%2 == 0 ? "Четное" : "Не четное";
            document.getElementById("even-out").innerHTML = out;
        }
    })
}
even();