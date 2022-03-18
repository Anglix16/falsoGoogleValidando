function buscar(){
    var buscado = document.getElementById("text").value;
    var buscador = document.getElementById("des").value;

    if (buscado != "" && buscador == "google") {
        document.forms[0].action="https://www.google.com/search";
        document.forms[0].method="GET"
        document.forms[0].submit();
    }

    else if (buscado != "" && buscador == "yahoo") {
        document.forms[0].action="https://es.search.yahoo.com/search";
        document.forms[0].method="GET"
        document.forms[0].submit();
    }
    else{
        alert("Introduzca algo");
    }
}