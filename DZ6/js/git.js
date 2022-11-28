let url = 'https://api.github.com/users/';
let form = document.getElementById("git");
let user = document.getElementById("User");
let userBlock = document.querySelector(".user-block");

window.onload = ()=> {
    let user = localStorage.getItem("_data-user");
    if(user) {
        let data = JSON.parse(user);
        writeUser(data);
    }
}


form.addEventListener("submit", (e)=> {
    e.preventDefault();
    if (user.value!=""){
        getUser (user.value);
    }
})

function getUser (user) {
    if(user!=""){
        let n_url = url + user;
        fetch(n_url, {
            method: "GET",
        })
        .then((response) => response.json())
        .then((data)=> {
            if(!data.message) {
                console.log(data);
                writeUser(data);
                localStorage.setItem("_data-user", JSON.stringify(data));
            }
            else {
                get404();
            }
        })
        .catch((e)=> {
            console.log(e);
        })
    }
}

function writeUser(user) {
    userBlock.innerHTML = "";
    userBlock.insertAdjacentHTML("beforeend", 
    `<div class="u-col">
        <div class="u-img">
            <img src="${user.avatar_url}" alt="" srcset="">
        </div>
        <div class="u-info">
            <span class="bold">Name:</span><span>${NullChek(user.name)}</span>
        </div>
        <div class="u-info">
            <span class="bold">Login:</span><span>${NullChek(user.login)}</span>
        </div>
    </div>
    <div class="u-col">
        <div class="u-info">
            <span class="bold">Url to github:</span><span><a href="${user.html_url}">${user.html_url}</a></span>
        </div>
        <div class="u-info">
            <span class="bold">Blog:</span><span><a href="${user.blog}">${user.blog}</a></span>
        </div>
        <div class="u-info">
            <span class="bold">City:</span><span>${NullChek(user.location)}</span>
        </div>
        <div class="u-info">
            <span class="bold">Emal:</span><span>${NullChek(user.email)}</span>
        </div>
        <div class="u-info">
            <div class="u-col u-info">                        
                <span class="bold">Followers:</span><span>${user.followers}</span>
            </div> 
            <div class="u-col u-info">                        
                <span class="bold">Following:</span><span>${user.following}</span>
            </div>                    
        </div>
    </div>        
    `);
}

function NullChek(data) {
    if(data==null) {
        return "Нет Данных"
    }
    return data;
}

function get404() {
    userBlock.innerHTML = "";
    userBlock.insertAdjacentHTML("beforeend",     
    `<div style="margin:auto;">
    <div style="text-align:center; font-size:8rem; color: #299ca4;">404</div>
    <p style="text-align:center; text-transform: uppercase;">User github not found</p>
    <p style="text-align:center; font-size:2rem; padding-top:2rem">Please enter different user</p>
    </div>
    `);
}