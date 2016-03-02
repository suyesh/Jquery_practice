//Prevent spoilerphobes from seeing spoilers
//solutions: Hide spoilers and reveal them through user interactions

//1- Hide spoler
$(".spoiler span").hide();
//2- Add a button
$(".spoiler").append("<button>Reveal Spoiler!</button>");
//3- When button is pressed
$("button").click(function(){
    //3.1 Show the spoiler.
    $(".spoiler span").show();
    //3.2 Get rid of button
    $(this).remove();
});
