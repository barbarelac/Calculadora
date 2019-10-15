var valores= "";
function resultado (display){
    var N1= document.getElementById ("display").value;
    var r= eval (N1);
    document.getElementById ("display").value= r;
   

    }

function concatenar (valor){
    var display= document.getElementById ("display").value;
    var resutado= display+valor;
    //alert (resutado);
    document.getElementById ("display").value= resutado;
}

var contt=1;
function operacao (sinal){
    
    //contt=contt+1;
    if (contt == 1){
        console.log (contt);
    var display= document.getElementById ("display").value;
    console.log (sinal);
    valores= display;
    document.getElementById ("display").value= display+sinal;}
    else {
        alert ("Você só pode usar uma operação por vez.");
        console.log (contt);
    }
}
function limpar (){
    window.location.href= "cal.html";
}
