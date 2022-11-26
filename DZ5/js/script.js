let form = document.getElementById("heloform");
let wrapper = document.querySelector("#heloform");

window.onload = function() {
    let userName = getCookie("_user");
    if(userName) {          
        HelloName(userName)
    }  
}

function HelloName(name) {    
    if(wrapper) {
        wrapper.insertAdjacentHTML("beforebegin", `<div style="margin:auto;">Привет, ${name}! Тебя запомнили!</div>`); 
        wrapper.classList.add("hide"); 
    }
}

function HelloForm() {    
    let name = document.getElementById("login"); 
    let remember = document.getElementById("remember");    
     
    if(name.value!="" && remember.checked) {  
        setCookie("_user", name.value, {'max-age' : 3600});
        wrapper.insertAdjacentHTML("beforebegin", `<div style="margin:auto;">Привет, ${name.value}! Мы тебя запомним!</div>`); 
        wrapper.classList.add("hide");              
    }
    if(name.value!="" && !remember.checked) {
        wrapper.insertAdjacentHTML("beforebegin", `<div style="margin:auto;">Привет! Мы забудем о тебе при следующей загрузке</div>`);
        wrapper.classList.add("hide");
    }
}

//https://learn.javascript.ru/cookie#prilozhenie-funktsii-dlya-raboty-s-kuki
function setCookie(name, value, options = {}) {
    options = {
      path: '/',      
      ...options
    };
  
    if (options.expires instanceof Date) {
      options.expires = options.expires.toUTCString();
    }
  
    let updatedCookie = encodeURIComponent(name) + "=" + encodeURIComponent(value);
  
    for (let optionKey in options) {
      updatedCookie += "; " + optionKey;
      let optionValue = options[optionKey];
      if (optionValue !== true) {
        updatedCookie += "=" + optionValue;
      }
    }
  
    document.cookie = updatedCookie;
}
  
function getCookie(name) {
    let matches = document.cookie.match(new RegExp(
      "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));
    return matches ? decodeURIComponent(matches[1]) : undefined;
}

function StudetnInfo() { 
    
    let gender = document.querySelectorAll('input[name="gender"]');
    let scills = document.querySelectorAll('input[name="scills"]');
    let s =[];
    let gen;
    gender.forEach(g => {
        if(g.checked){
            gen = g.value;
        }
    });
    
    scills.forEach(el => {
        if(el.checked) {
            s.push(el.value)
        }
    }); 

    console.log(s);
    let user = {
        FirstName: document.getElementById("firstName").value,
        LastName: document.getElementById("lastName").value,
        Birthday: document.getElementById("Birthday").value,
        Gender: gen,
        Country: document.getElementById("country").value,
        City: document.getElementById("city").value,
        Scils: s.join(" ")
    }
    
    return user;
   
  
}

function getUserInfo(users) {    
    let table = document.querySelector(".table tbody");
    table.textContent = "";
    table.insertAdjacentHTML("beforeend", `<tr>
                                                <td>First Name:</td><td>${users.FirstName}</td>
                                                </tr>
                                                <tr>
                                                    <td>Last Name:</td><td>${users.LastName}</td>
                                                </tr>
                                                <tr>
                                                    <td>Birthday:</td><td>${users.Birthday}</td>
                                                </tr>
                                                <tr>
                                                    <td>Gender:</td><td>${users.Gender}</td>
                                                </tr>
                                                <tr>
                                                    <td>Country:</td><td>${users.Country}</td>
                                                </tr>
                                                <tr>
                                                    <td>City:</td><td>${users.City}</td>
                                                </tr>
                                                <tr>
                                                    <td>Scills:</td><td>${users.Scils}</td>
                                                </tr>`);
    
}

if(document.getElementById("studentForm")) {
    document.getElementById("studentForm").addEventListener("submit", (e)=> {
        e.preventDefault();    
        getUserInfo(StudetnInfo());
    })
}



document.getElementById("formcolor").addEventListener("submit", (e)=> {
    e.preventDefault();
    //addColor();
    let R = document.getElementById("r");
    let G = document.getElementById("g");
    let B = document.getElementById("b");
    let colors = document.querySelector(".colors");
    colors.insertAdjacentHTML("beforeend", `<div class="color-item">
                                                <div class="color" style="background-color:rgb(${R.value}, ${G.value}, ${B.value})"></div>
                                                <div>RGB (${R.value}, ${G.value}, ${B.value})</div>
                                            </div>`)
})

function addColor() {
    console.log("helo!");
}