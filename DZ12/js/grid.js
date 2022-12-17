let leftToRight = $(".left-right");
leftToRight.draggable({
    containment: ".grid", 
    scroll: false,
    drag: function()  {
        $(".left").css({"width": $(this).css("left")});
        $(".right").css({"width": ` calc(100% - ${$(this).css("left")} ) ` });
    }    
});

let topBottom = $(".top-bottom");
topBottom.each(function() {
    $(this).draggable({
        containment: ".grid", 
        axis: "y",
        drag: function() {
            $(this).prev(".top").css({"height": $(this).css("top")});
            $(this).next(".bottom").css({"height": `calc(100% - ${$(this).css("top")})`});
        }
    });
})


