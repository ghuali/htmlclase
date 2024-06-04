"Use strict"

loadDoc();

function loadDoc() {
    let xhttp;
    
    xhttp = new XMLHttpRequest();
    xhttp.onload = function() {myFunction(this),cambiaimagen(this);}
    xhttp.open("GET", "Examenrecu.xml");
    xhttp.send();
}
function myFunction(xml) {
    let xmlDoc,table,peli,i
  
    xmlDoc = xml.responseXML;
    console.log(xmlDoc)
    peli = xmlDoc.getElementsByTagName("peliculas");

    table=
      "<table>" +
        "<thead>" + 
          "<tr><th>Posicion</th><th>Titulo</th><th>Genero</th><th>Semanas</th><th>Recaudacion fin de semana</th><th>Recaudacion Total</th></tr>" +
        "</thead>"+
      "<tbody>"
    for (i = 0; i < peli.length; i++) {
      table += 
      "<tr>" +
        "<td >" +
        xmlDoc.getElementsByTagName("posicion")[i].childNodes[0].nodeValue +
        "</td>" +
        "<td '>" +
        xmlDoc.getElementsByTagName("titulo")[i].childNodes[0].nodeValue +
        "</td><td >" +
        xmlDoc.getElementsByTagName("genero")[i].childNodes[0].nodeValue +
        "</td>"+ 
        "<td> " +
        xmlDoc.getElementsByTagName("semanas")[i].childNodes[0].nodeValue +
        "</td>" +
        "<td>" +
        xmlDoc.getElementsByTagName("recaudacion")[i].childNodes[0].nodeValue +
        "</td>" +
        "<td>" +
        xmlDoc.getElementsByTagName("recaudaciontotal")[i].childNodes[0].nodeValue +
        "</td>" +
      "</tr>";
    }
    table += 
        "<t/body>"
      "</table>"

    document.getElementById("tabla").innerHTML = table;
  }
function cambiaimagen(xml) {
    let xmlDoc,imagen,peli,x

    xmlDoc = xml.responseXML;
    peli = xmlDoc.getElementsByTagName("peliculas")
    
    for (x = 0; x < peli.length; x++){
        imagen = 
        "<img src='" + xmlDoc.getElementsByTagName("imagen")[x].childNodes[0].nodeValue + "' alt=''>"
    }
    document.getElementById("imagen").innerHTML = imagen;
}