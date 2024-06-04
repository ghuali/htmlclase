"use strict"

document.getElementById("cargar").addEventListener("click", pedirAlServidor);

function pedirAlServidor() {
    let xhr;

    xhr = new XMLHttpRequest();
    xhr.onload = function () {
        mostrarInformacion(this);
    }
    xhr.open("GET", "https://randomuser.me/api/?format=xml&results=4");
    xhr.send();
}

function mostrarInformacion (xml) {
    let xmlDoc, photo, name, email, password;
    /*
    xmlDoc = xml.responseText;
    console.log(xmlDoc);
    */
    xmlDoc = xml.responseXML;
    photo = document.querySelector("#photo");
    name = document.querySelector("#name");
    email = document.querySelector("#email");
    password = document.querySelector("#password");
    
    photo.src = 
        xmlDoc.getElementsByTagName("large")[0].childNodes[0].nodeValue;
    name.innerHTML = 
        xmlDoc.getElementsByTagName("title")[0].childNodes[0].nodeValue + " " +
        xmlDoc.getElementsByTagName("first")[0].childNodes[0].nodeValue + " " +
        xmlDoc.getElementsByTagName("last")[0].childNodes[0].nodeValue + ".";
    email.innerHTML = 
        xmlDoc.getElementsByTagName("email")[0].childNodes[0].nodeValue;
    password.innerHTML = 
        "User: " + xmlDoc.getElementsByTagName("username")[0].childNodes[0].nodeValue + " " +
        "Pass: " + xmlDoc.getElementsByTagName("password")[0].childNodes[0].nodeValue;

codigoHTML = 
    "<div id= 'resultado'>" +
        "<img src='" + photo +"'></img>" +
        "<h4>" + name + "</h4>" +
        "<p>" + email + "<p>" +
        "<p>" + password + "</p>" + 
        "</div>";
document.getElementById("resultados").innerHTML
}