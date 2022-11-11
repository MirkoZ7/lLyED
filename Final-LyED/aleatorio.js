var n = 0
{
    n = parseInt(prompt("Escribe un numero entero pequeño"));
}
var n2 = 0
{
    n2 = parseInt(prompt("Escribe otro numero entero mas grande"));
}

function iniciar(){
    
    var max = n2; 
    var min = n; 
    var numerom = Math.random()*(max-min) + min; 
    numerom = parseInt(numerom); 
    
    while(true){ 
          var usuario = prompt("COLOCA UN NUMERO PARA ADIVINAR EL NUMERO MAGICO"); 
    
    if(usuario == numerom){ 
      alert("HAS GANADO");
      break;
    }
    else if(usuario == 0){
      break; 
    }
    else if(usuario < numerom){
      
      alert("EL NUMERO ES MENOR QUE EL NUMERO MAGICO, VUELVE A INTENTARLO" );
    }
    else if(usuario > numerom){
      
      
      alert("EL NUMERO ES MAYOR QUE EL NUMERO MAGICO, VUELVE A INTENTARLO");
    }
    
    } 



}

