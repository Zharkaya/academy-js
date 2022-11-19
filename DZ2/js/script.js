let animationText = () => {    
    let textBlock = document.getElementById("animText");

    if(textBlock) {
        let author = document.querySelector(".author");    
        //получаем текст и сохраняем в массив
        let textChar = textBlock.innerText.split("");
        //убираем текст с DOM
        textBlock.innerText = "";    
        //рисуем его обратно с интервалом  
        let index = 0;
        let id = setInterval(()=>{
            textBlock.append(textChar[index]);
            index++;
            if(index >= textChar.length) {
                clearInterval(id);
            }
        }, 100);
        
        //добавляем автора
        setTimeout( () => {
            author.innerHTML = "William Shakespeare, from «Hamlet»";
        }, (textChar.length + 1) * 100);
    }

}


animationText();

let timerNewYear = () => {
   let today = new Date();   
   let newDate = new Date(today.getFullYear() + 1, 0, 1);  //(Год, месяц(0-11), день)
   //колличество миллесикунд между сегодняшней датой и новой датой
   let milDate = newDate.getTime() - today.getTime();   

   let seconds = Math.floor((milDate/1000)%60);
   let minuts = Math.floor(milDate/(60*1000)%60);
   let hours = Math.floor((milDate/(60*60*1000))%24);
   let days =  Math.floor(milDate/(24*60*60*1000)); 

   if (days<10) days = "0" + days;
   if(hours<10) hours = "0" + hours;
   if(minuts<10) minuts = "0" + minuts;
   if (seconds<10) seconds = "0" + seconds;     


   document.querySelector(".days").innerHTML = days;
   document.querySelector(".hours").innerHTML = hours;
   document.querySelector(".minutes").innerHTML = minuts;
   document.querySelector(".seconds").innerHTML = seconds;
   
}

if(document.querySelector(".new-year-time")) {
    setInterval(timerNewYear, 1000);
}

window.onload = () => {
    if(document.querySelector(".list-block")) {
        list.printList();   
    }    
}

let list = {
    values : [
        "Home Work",
        "Work",       
        "Sport", 
        "Walk the dog",
    ],
    printList() {
        let list = document.getElementById("to-do-list");        
        
        let lis = document.querySelectorAll("#to-do-list li");        
        lis.forEach(element => {
           element.remove();
        });
                
        this.values.forEach(element => {
            let li = document.createElement('li');
            li.innerHTML = element;
            list.appendChild(li);
        });
    },

    add(product) {
        this.values.push(product);
        this.printList();
    }
}