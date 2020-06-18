function convert(event) {
    var grades = parseFloat(document.getElementById("grades").value);
    // parseFloat() convierte un string en un numero con decimales, si necesitas convertir
    // un string a un entero, entonces usa parseInt()
    var text;

    if( !isNaN(grades) ) {
        text = "Conversión a grados Fahrenheit: " + ( grades * (9 / 5) + 32 ); 
    } else {
        text = "Un número válido es requerido"; 
    }

    document.getElementById("message").innerHTML = text;
}