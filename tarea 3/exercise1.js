function validate(event) {
    var key = event.key, text; //Saber que la letra venia en este parametro

    if (!isNaN(key)) {
        text = "Escribió un número";
    } else {
        text = "Escribió una letra o carácter especial";
    }
    document.getElementById("message").innerHTML = text;
}