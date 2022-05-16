let numLanzamientos = prompt("¿Cuantas veces quieres lanzar el dado?")

let num = [0,0,0,0,0,0]

function generarNumAleatorio(){
  return Math.floor(Math.random() * 6 + 1);
}

for(let i = 1; i <= numLanzamientos; ++i){
  let numero = generarNumAleatorio(numLanzamientos)
  if(numero == 1){
    num[0] ++
  }else if (numero == 2){
    num[1] ++
  }else if (numero == 3){
    num[2] ++
  }else if (numero == 4){
    num[3] ++
  }else if (numero == 5){
    num[4] ++
  }else if (numero == 6){
    num[5] ++
  }
}
  let sumaNum = num[0]+num[1]+num[2]+num[3]+num[4]+num[5]

  let frecueNum = [0,0,0,0,0,0]
  frecueNum[0] = num[0] / sumaNum
  frecueNum[1] = num[1] / sumaNum
  frecueNum[2] = num[2] / sumaNum
  frecueNum[3] = num[3] / sumaNum
  frecueNum[4] = num[4] / sumaNum
  frecueNum[5] = num[5] / sumaNum

  let frecueANum = [0,0,0,0,0,0]
  frecueANum[0] = frecueNum[0]
  frecueANum[1] = frecueANum[0] + frecueNum[1]
  frecueANum[2] = frecueANum[1] + frecueNum[2]
  frecueANum[3] = frecueANum[2] + frecueNum[3]
  frecueANum[4] = frecueANum[3] + frecueNum[4]
  frecueANum[5] = frecueANum[4] + frecueNum[5]

  console.log("Numero 1 :: " + num[0] + " :: Frecuencia :: " + frecueNum[0] + " :: Frecuencia A :: " + frecueANum[0]);
  console.log("Numero 2 :: " + num[1] + " :: Frecuencia :: " + frecueNum[1] + " :: Frecuencia A :: " + frecueANum[1]);
  console.log("Numero 3 :: " + num[2] + " :: Frecuencia :: " + frecueNum[2] + " :: Frecuencia A :: " + frecueANum[2]);
  console.log("Numero 4 :: " + num[3] + " :: Frecuencia :: " + frecueNum[3] + " :: Frecuencia A :: " + frecueANum[3]);
  console.log("Numero 5 :: " + num[4]+ " :: Frecuencia :: " + frecueNum[4] + " :: Frecuencia A :: " + frecueANum[4]);
  console.log("Numero 6 :: " + num[5]+ " :: Frecuencia :: " + frecueNum[5] + " :: Frecuencia A :: " + frecueANum[5]);
  console.log("Total Iteraciones :: " + sumaNum);

  function generarTabla() {
    var body = document.getElementsByTagName("body")[0];
    var tabla = document.createElement("table");
    var cuerpo = document.createElement("tbody");
    for(var i=0; i<6;i++){
      var fila = document.createElement("tr");


        var celda = document.createElement("td");

        var textoCelda = document.createTextNode("Numero " + (i+1) + " = " + num[i] + " || Frecuencia R " + (i+1) + " = " + frecueNum[i] + " || Frecuencia A " + (i+1) + " = " + frecueANum[i]);

        celda.appendChild(textoCelda);
        fila.appendChild(celda);

      cuerpo.appendChild(fila);
    }
    tabla.appendChild(cuerpo);
    body.appendChild(tabla);
    tabla.setAttribute("border","2");
  }

  generarTabla();

  var miCanvas=document.getElementById("miGrafica");
  var papel = miCanvas.getContext("2d");
  var chart = new Chart(miCanvas,{
    type: "bar",
    data:{
      labels:["UNO","DOS","TRES","CUATRO","CINCO","SEIS"],
      datasets:[
        {
          label:"Mi grafica Iteraciones",
          backgroundColor:"rgb(0,255,0)",
          data:[num[0],num[1],num[2],num[3],num[4],num[5]]
        }
      ]
    }
  })
