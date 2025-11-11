function showFrance(){
    var france = document.getElementById("france");
    var mesopotamia = document.getElementById("mesopotamia");
    var northAmerica = document.getElementById("NA");
    var mapIntro = document.getElementById("mapIntro");

    mapIntro.style.display = "none";
    france.style.display = "inline";
    mesopotamia.style.display = "none";
    northAmerica.style.display = "none";
    france.scrollIntoView()
}

function showMesopotamia(){
    var france = document.getElementById("france");
    var mesopotamia = document.getElementById("mesopotamia");
    var northAmerica = document.getElementById("NA");
    var mapIntro = document.getElementById("mapIntro");

    mapIntro.style.display = "none";
    france.style.display = "none";
    mesopotamia.style.display = "inline";
    northAmerica.style.display = "none";
    mesopotamia.scrollIntoView()
}

function showNA(){
    var france = document.getElementById("france");
    var mesopotamia = document.getElementById("mesopotamia");
    var northAmerica = document.getElementById("NA");
    var mapIntro = document.getElementById("mapIntro");

    mapIntro.style.display = "none";
    france.style.display = "none";
    mesopotamia.style.display = "none";
    northAmerica.style.display = "inline";
    northAmerica.scrollIntoView()
}