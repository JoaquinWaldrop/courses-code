function calculate(event) {
    event.preventDefault();

    var day = parseInt(document.getElementById("day").value);
    var month = parseInt(document.getElementById("month").value);
    var year = parseInt(document.getElementById("year").value);

    var today = new Date();
    var dayNow = today.getDate();
    var monthNow = today.getMonth() + 1;
    var yearNow = today.getFullYear();

    var errorDay = "", errorMonth = "", errorYear = "", result = "";

    if ( isNaN(day) || day < 1 || day > 31 ) {
        errorDay = "Invalid Day";
    }

    if ( isNaN(month) || month < 1 || month > 12 ) {
        errorMonth = "Invalid Month";
    }

    if ( isNaN(year) || year < 1900 || year > 2020 ) {
        errorYear = "Invalid Year";
    }

    if( !errorDay && !errorMonth && !errorYear ) {
        if( monthNow > month ) {
            result = "The person is " + (yearNow - year) + " years old";
        } else if ( monthNow === month ) {
            if( dayNow >= day ) {
                result = "The person is " + (yearNow - year) + " years old";
            } else {
                result = "The person is " + (yearNow - year - 1) + " years old";
            }
        } else {
            result = "The person is " + (yearNow - year - 1) + " years old";
        }
    }

    document.getElementById("errorDay").innerHTML = errorDay;
    document.getElementById("errorMonth").innerHTML = errorMonth;
    document.getElementById("errorYear").innerHTML = errorYear;

    document.getElementById("result").innerHTML = result;

    console.log(day, month, year);
}