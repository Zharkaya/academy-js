$(function() {
    const APP = $("#app");

    const app =  {     
        data: {
            title: "All user",
        }, 
        //возвращаем тайтл                   
        title: function () {
            let template = `<h3 class="title">${this.data.title}</h3>`
            APP.append(template);            
        },
        //Получаем обертку с блоками юзеров
        userblock: function (data) {
            let template = `<div class="users" id="userblock">${this.usernames(data)}</div>`                    
            return template;
        },
        //Получаем имена юзеров
        usernames: function(users) {
            let template= ``;           
            users.forEach(user => {
                template += `<div class="user" data-user="${user.id}">${user.name}</div>`               
            });           
            return template; 
        },
        //получаем дополнительную информацию и рисуем таблицу
        usertable: function (data) {
            let userinfo = $(".user-info");
            if(userinfo.length != 0 ) {
                userinfo.remove();
            }
            let posts = $(".post-wrap");
            if(posts.length != 0 ) {
                posts.remove();
            }
            template = `<div class="user-info">
                <h3 class="title">User info</h3>
                <table>
                    <tbody>
                        <tr>
                            <td>Name:</td><td>${data.name}</td>
                        </tr>
                        <tr>
                            <td>Username:</td><td>${data.username}</td>
                        </tr>
                        <tr>
                            <td>Address:</td><td>${data.address.city}, ${data.address.street} </td>
                        </tr>
                        <tr>
                            <td>Emai:</td><td>${data.email}</td>
                        </tr>
                        <tr>
                            <td>Phone:</td><td>${data.phone}</td>
                        </tr>
                        <tr>
                            <td>Website:</td><td>${data.website}</td>
                        </tr>
                    </tbody>
                </table>
                <button id="showPost" data-post="${data.id}">Show Post</button>
            </div>`
            return template;
        },
        //рисуем посты пользователя
        userpost: function (post) {
            let posts = $(".post-wrap");
            if(posts.length != 0 ) {
                posts.remove();
            }
            let template = ``
            post.forEach(p => {
                template += `<div class="post"><h3 class="title">${p.title}</h3><p>${p.body}</p></div>`
            });
            return `<div class='post-wrap'>${template}</div>`;
        },
        //ajax запрос юзеров
        user: function () {            
            $.ajax({
                url: 'https://jsonplaceholder.typicode.com/users',
                method: 'get',
                dataType: 'json',
                success: (data)=>{                    
                    //результаты выгружаем в наше приложение                     
                    APP.append(this.userblock(data));  //WTF??  
                    let user = $(".user");                   
                    user.each(function() {
                        $(this).on("click", ()=>{
                            app.userinfo($(this).attr("data-user"));
                        })
                    });
                }
            })
            return "";           
        }, 
        //ajax запрос юзера
        userinfo: function (id) {
            $.ajax({
                url: 'https://jsonplaceholder.typicode.com/users/' + id,
                method: 'get',
                dataType: 'json',
                success: (data)=>{
                    APP.append(this.usertable(data));
                    let btn = $("#showPost");
                    btn.on("click", ()=>{
                        this.post(btn.attr("data-post"));
                    })                    
                },
                error: (err)=> {
                    console.log(err.status);
                }
            })
            
        },   
        //ajax запрос к постам 
        post: function (id) {
            $.ajax({
                url: 'https://jsonplaceholder.typicode.com/posts?userId=' + id,
                method: 'get',
                dataType: 'json',
                success: (data) => {                    
                    APP.append(this.userpost(data));                    
                }
            })
        },
        //функции выполняющиеся при загрузке приложения
        init: function () {
            this.title();
            this.user();            
        },     

    }
    
    //запускаем
    app.init();
});