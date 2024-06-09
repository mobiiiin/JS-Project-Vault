// Select
function selectedInHtml() {
    let select = document.querySelector("#year");
    return select
}

// Creator
function CreateOptionElement(value = "year", content = "nothing") {
    this.value = value;
    this.content = content;
}

// Method build tag option
CreateOptionElement.prototype.createOption = function () {
    let option = document.createElement("option");
    option.value = this.value;
    option.textContent = this.content;
    console.log(option);
    return option
}

// This function is for converting English numbers to Farsi
fixNumbers = function (str,) {
    let
        persianNumbers = [/۰/g, /۱/g, /۲/g, /۳/g, /۴/g, /۵/g, /۶/g, /۷/g, /۸/g, /۹/g],
        arabicNumbers = [/٠/g, /١/g, /٢/g, /٣/g, /٤/g, /٥/g, /٦/g, /٧/g, /٨/g, /٩/g],
        englishNumbers = [/0/g, /1/g, /2/g, /3/g, /4/g, /5/g, /6/g, /7/g, /8/g, /9/g]

    if (typeof str === 'string') {
        for (var i = 0; i < 10; i++) {
            str = str.replace(englishNumbers[i], i).replace(persianNumbers[i], i);
        }
    }
    return str;
}

// This function displays the years of the car 
// From this year to 20 years ago
function ShowTheYearOfProductionOfCars() {
    let currentYear = new Date().getFullYear();
    let startYear = currentYear - 20;
    for (currentYear; currentYear >= startYear; currentYear--) {
        currentYear = fixNumbers(currentYear.toString())
        let options = new CreateOptionElement("year", currentYear)
        selectedInHtml().append(options.createOption())
        
    }
}
ShowTheYearOfProductionOfCars()








