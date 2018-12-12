function start1() {
    document.getElementById('komunikat').innerHTML = "<h1>Cześć</h1>";
}
function przlacz() {
    var h = document.getElementById('komunikat').hidden;
    if (h) {
        document.getElementById('komunikat').hidden = false;
    } else {
        document.getElementById('komunikat').hidden = true;
    }
    document.getElementById("komunikat").style.fontSize = "120px"
}

function pisz() {
    document.write(5 + 6);
}

function alarm() {
    window.alert("uwaga sss");
    console.log(5 + 6);
}