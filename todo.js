var trashIcon ='<i class="far fa-trash-alt trash" ></i>'

$(".input").on("keypress",function(event){
    if(event.which===13){
        printDown()
    }   
})

$("#plus").on("click",function(){
    $(".input").toggleClass("hide")

})

function printDown(){
    console.log($("ul li").length)
    if($("ul li").length<6){

        var tekst = $(".input").val()
        $(".input").val(" ")
        $("ul").append("<li>"+"<span class='hide'>" + trashIcon +"</span>"  + tekst + "</li>");
    
    }

    else {
        alert("You cannot enter more than 6 todos. Make some progress first!")
    }
}

$("ul").on("click", "li", function(){
    $(this).toggleClass("completed")
})

$("ul").on("mouseenter","li", function(){
    $(this).children("span").removeClass("hide")

})

$("ul").on("mouseleave","li", function(){
    $(this).children("span").addClass("hide")
})

$("ul").on("click","span",function(event){
    $(this).parent().fadeOut(500,function(){
        $(this).remove();
    })

    //.remove() da olabilirdi... ikinci this list item ı refer ediyor...

    event.stopPropagation();
})