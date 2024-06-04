pedirAlServidor();

function pedirAlServidor(){
    let xhttp;

    console.log("Si")

    xhttp = new XMLHttpRequest();
    xhttp.onload = function(){
            mostrarInformacion(this);
    }
    xhttp.open("GET", "clasificacion (1).xml")
    xhttp.send();

}

function mostrarInformacion(xml){
    let xmlDoc, table, numeroEquipos, i, equipo, pts, pg, pe, pp, gf, gc, rank, pj;

    xmlDoc = xml.responseXML;
    table = "<table>";
    table += "<tr><th> Equipo </th><th> PTS </th><th> PJ </th><th> PG </th><th>  PE </th><th> PP </th><th> GG </th><th> GC </th></tr>";
    numeroEquipos = xmlDoc.getElementsByTagName("team").length;

    for (i=0; i<numeroEquipos; i++){

        equipo = xmlDoc.getElementsByTagName("name")[i].childNodes[0].nodeValue;  
        rank = xmlDoc.getElementsByTagName("rank")[i].childNodes[0].nodeValue;
        pts = xmlDoc.getElementsByTagName("points")[i].childNodes[0].nodeValue;
        pj = xmlDoc.getElementsByTagName("played")[i].childNodes[0].nodeValue;
        pg = xmlDoc.getElementsByTagName("won")[i].childNodes[0].nodeValue;
        pe = xmlDoc.getElementsByTagName("drawn")[i].childNodes[0].nodeValue;
        pp = xmlDoc.getElementsByTagName("lost")[i].childNodes[0].nodeValue;
        gf = xmlDoc.getElementsByTagName("goals_scored")[i].childNodes[0].nodeValue;
        gc= xmlDoc.getElementsByTagName("goals_conceded")[i].childNodes[0].nodeValue;

        table += "<tr><td>" + rank + ". " + equipo + "</td><td>" + pts + "</td><td>" + pj + "</td><td>" + pg + "</td><td>" + pe + "</td><td>" + pp + "</td><td>" + gf + "</td><td>" + gc + "</td></tr>";
    }

    table += "</table>";

    document.getElementById("tabla").innerHTML = table;
}