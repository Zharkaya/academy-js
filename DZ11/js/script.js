let list = $("#List ul li");
list.each(function() {
    if($(this).text().search("https://") != -1 ||$(this).text().search("http://") != -1  ) {
        $(this).html(`<a href="${$(this).text()}">${$(this).text()}</a>`);
    }
})

$(".top").on("click", function(){
    $(".parent").toggleClass("hide");
});

$(".top-parent").each(function(){
    $(this).on("click", function(){
        $(this).next().toggleClass("hide");
    })
})

let books = $("#Books li");
books.each(function(){    
    $(this).on("click", function ( event ) {       
        choseBooks(event, $(this));
    });
})

function choseBooks(event, el) {  
    if(event.ctrlKey) {
        el.toggleClass("active");
    }
    else if (event.shiftKey) {        
        el.addClass("active");
        let active = []; 
        books.each(function(){       
            if($(this).hasClass("active")) 
                active.push($(this).index());
        })
        if(active[0]<active[active.length-1]) {
            for(let i=active[0]; i<active[1]; i++)                    
                books.eq(i).addClass("active");            
        }
        if(active[0]>active[active.length-1]) { 
            for(let i=active[1]; i<active[0]; i++)                   
                books.eq(i).addClass("active");            
        }         
    }
    else {
        books.each(function(){       
            if($(this).hasClass("active"))
                $(this).removeClass("active");            
        })
        el.addClass("active");
    }
}

let text = $(".text");

console.log(text.length);

if(text.length == 1) {  
    $(document).on("keydown", function(e) {
        if(e.ctrlKey && e.key == "e") { 
            e.preventDefault();
            text.html(`<textarea style="width:800px; height: 250px;">${text.text()}</textarea>`);
        }
        if(e.ctrlKey && e.key == "s") {
            e.preventDefault(); 
            let textarea = text.children("textarea");
            text.text(textarea.val());
            //text.html(textarea.val());
        }
    })
}