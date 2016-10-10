$(document).ready(function(){
    $("#port_div1").click(function(){
        $("#port2").slideUp("slow", "swing");
        $("#port3").slideUp("slow", "swing");
        $("#contact").slideUp("slow", "swing");
        $("#port1").slideToggle("slow", "swing");

    });

    $("#port_div2").click(function(){
        $("#port1").slideUp("slow", "swing");
        $("#port3").slideUp("slow", "swing");
        $("#contact").slideUp("slow", "swing");
        $("#port2").slideToggle("slow", "swing");
    });

    $("#port_div3").click(function(){
        $("#port1").slideUp("slow", "swing");
        $("#port2").slideUp("slow", "swing");
        $("#contact").slideUp("slow", "swing");
        $("#port3").slideToggle("slow", "swing");
    });

    $("#phone").click(function(){
        $("#port1").slideUp("slow", "swing");
        $("#port2").slideUp("slow", "swing");
        $("#port3").slideUp("slow", "swing");
        $("#contact").slideToggle("slow", "swing");
        console.log("IT WORKS!");
    });
});
