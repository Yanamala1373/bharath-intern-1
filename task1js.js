function convertTemperature() {
    var celsius = parseFloat(document.getElementById("celsius").value);
    if (!isNaN(celsius)) {
        var fahrenheit = (celsius * 9/5) + 32;
        document.getElementById("fahrenheit").textContent = fahrenheit.toFixed(2);
    } else {
        document.getElementById("fahrenheit").textContent = "-" ;
    }
}