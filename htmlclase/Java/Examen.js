"Use strict"

loadDoc();

function loadDoc() {
    let xhttp;
    
    xhttp = new XMLHttpRequest();
    xhttp.onload = function() {myFunction(this);}
    xhttp.open("GET", "Examen.xml");
    xhttp.send();
  }
function myFunction(xml) {
    let xmlDoc,table,coches,i
  
      xmlDoc = xml.responseXML;
     coches = xmlDoc.getElementsByTagName("coche");
     table=
      "<table>" +
        "<thead>" + 
          "<tr><th>Posicion</th><th>Marca</th><th>Modelo</th><th>Unidades</th></tr>" +
        "</thead>"+
      "<tbody>"
    for (i = 0; i <coches.length; i++) {
      table += 
      "<tr>" +
        "<td>" +
        xmlDoc.getElementsByTagName("category")[i].childNodes[0].nodeValue +
        "</td>" +
        "<td>" +
        xmlDoc.getElementsByTagName("posicion")[i].childNodes[0].nodeValue +
        "</td><td>" +
        xmlDoc.getElementsByTagName("marca")[i].childNodes[0].nodeValue +
        "</td>"+ 
        "<td>" +
        xmlDoc.getElementsByTagName("modelo")[i].childNodes[0].nodeValue +
        "</td>" +
        "<td>" +
        xmlDoc.getElementsByTagName("unidades")[i].childNodes[0].nodeValue +
        "</td>" +
      "</tr>";
    }
    table += 
        "<t/body>"
      "</table>"

    document.getElementById("tabla").innerHTML = table;
  }
