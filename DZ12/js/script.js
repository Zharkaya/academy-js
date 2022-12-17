$("#Generator").on("submit", function(e){
    e.preventDefault();    
    $("#Result").html(GeneratePassword($(".length").val()));
})

function GeneratePassword(length) {

    let digits = $('[name="digits"]');
    let upper = $('[name="up_letter"]');
    let low = $('[name="low_letter"]');
    let simbols = $('[name="simbols"]');

    let chars = ``;  
    let template = ``;

    if(digits.prop('checked'))
        chars += GenerateChars(48, 57);

    if (upper.prop('checked'))
        chars += GenerateChars(65, 90);

    if(low.prop('checked'))
        chars += GenerateChars(97, 122);

    if(simbols.prop('checked')) {
        chars += GenerateChars(123, 126);
        chars += GenerateChars(91, 96);        
    }

    for(let i=0;i<length; i++)
        template += chars.charAt( Math.floor( Math.random() * chars.length ) );

    return template;
}

function GenerateChars(start, stop) {
    let chars = '';
    for(let i=start; i<stop; i++) {        
        chars += String.fromCharCode(i);
    }   
    return chars;
}