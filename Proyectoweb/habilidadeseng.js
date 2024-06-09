"Use strict"

loadDoc();

function loadDoc() {
    let xhttp;
    
    xhttp = new XMLHttpRequest();
    xhttp.onload = function() {myFunction(this);}
    xhttp.open("GET", "habilidades.xml");
    xhttp.send();
  }
function myFunction(xml) {
    let xmlDoc,table,sinner,i
  
      xmlDoc = xml.responseXML;
     sinner = xmlDoc.getElementsByTagName("sinner");
     table=
      "<table>" +
        "<thead>" + 
          "<tr><th>Name</th><th>skill1</th><th>Skill2</th><th>Skill3</th></tr>" +
        "</thead>"+
      "<tbody>"
    for (i = 0; i <sinner.length; i++) {
      table += 
      "<tr>" +
        "<td>" +
        xmlDoc.getElementsByTagName("nombre")[i].childNodes[0].nodeValue +
        "</td>" +
        "<td>" +
        xmlDoc.getElementsByTagName("skill1")[i].childNodes[0].nodeValue +
        "</td><td>" +
        xmlDoc.getElementsByTagName("skill2")[i].childNodes[0].nodeValue +
        "</td>"+ 
        "<td>" +
        xmlDoc.getElementsByTagName("skill3")[i].childNodes[0].nodeValue +
        "</td>" +
      "</tr>";
    }
    table += 
        "<t/body>"
      "</table>"

    document.getElementById("tabla").innerHTML += table;
}