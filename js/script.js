$(document).ready(function(){
    var mostrado = "0"
    var num = 0;
    var num2 = 0;
    var total = 0;
    $("#cero").on("click", function(event){
        $("#pantalla").html(parseInt(mostrado = mostrado.concat("0")));
    });
    $("#uno").on("click", function(event){
        $("#pantalla").html(parseInt(mostrado = mostrado.concat("1")));
    });
    $("#dos").on("click", function(event){
        $("#pantalla").html(parseInt(mostrado = mostrado.concat("2")));
    });
    $("#tres").on("click", function(event){
        $("#pantalla").html(parseInt(mostrado = mostrado.concat("3")));
    });
    $("#cuatro").on("click", function(event){
        $("#pantalla").html(parseInt(mostrado = mostrado.concat("4")));
    });
    $("#cinco").on("click", function(event){
        $("#pantalla").html(parseInt(mostrado = mostrado.concat("5")));
    });
    $("#seis").on("click", function(event){
        $("#pantalla").html(parseInt(mostrado = mostrado.concat("6")));
    });
    $("#siete").on("click", function(event){
        $("#pantalla").html(parseInt(mostrado = mostrado.concat("7")));
    });
    $("#ocho").on("click", function(event){
        $("#pantalla").html(parseInt(mostrado = mostrado.concat("8")));
    });
    $("#nueve").on("click", function(event){
        $("#pantalla").html(parseInt(mostrado = mostrado.concat("9")));
    });




    var oper;
    $("#suma").on("click", function(event){
        oper = "+";
        num = parseInt(mostrado);
        mostrado = "0";
    });
    $("#resta").on("click", function(event){
        oper = "-";
        num = parseInt(mostrado);
        mostrado = "0";
    });
    $("#producto").on("click", function(event){
        oper = "*";
        num = parseInt(mostrado);
        mostrado = "0";
    });
    $("#division").on("click", function(event){
        oper = "/";
        num = parseInt(mostrado);
        mostrado = "0";
    });
    $("#total").on("click", function(event){
        num2 = parseInt(mostrado);
        switch(oper) {
            case "+":
                mostrado = num + num2;
                break;
            case "-":
                mostrado = num - num2;
                break;
            case "*":
                mostrado = num * num2;
                break;
            case "/":
                mostrado = num / num2;
                break;
            default:
                break;
        }
        $("#pantalla").html(mostrado);
        

    });
    $("#borrar").on("click", function(event){
        num = 0;
        num2 = 0;
        mostrado = "0";
        $("#pantalla").html("0");        
    });




});