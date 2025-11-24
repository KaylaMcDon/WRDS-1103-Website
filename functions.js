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
    scrollBy(0,-100)
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
    scrollBy(0,-100)
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
    scrollBy(0,-100)
}

function swapPoem(){
    var short = document.getElementById("shortPoem");
    var long = document.getElementById("longPoem");
    var button = document.getElementById("swapButton")

    if(short.style.display === "none"){
        long.style.display = "none";
        short.style.display = "block";
        button.innerHTML = "<u>Show Full Poem</u>";        
    }
    else {
        short.style.display = "none";
        long.style.display = "block";
        button.innerHTML = "<u>Show Less</u>";
    }
    france.scrollIntoView()
    scrollBy(0,-100)
}