// Select
function selectedInHtml() {
    let select = document.querySelector("#year");
    return select;
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
    return option;
}

// This function is for converting English numbers to Farsi
fixNumbers = function (str,) {
    str = str.toString();
    if (typeof str === 'string') {
        let persianNumbers = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
        let englishNumbers = [/0/g, /1/g, /2/g, /3/g, /4/g, /5/g, /6/g, /7/g, /8/g, /9/g];
        for (let i = 0; i < 10; i++) {
            str = str.replace(englishNumbers[i], persianNumbers[i]);
        }
    }
    return str;
}

// This function displays the years of the car 
// From this year to 20 years ago
function ShowTheYearOfProductionOfCars() {
    // Solar year
    let currentYear = moment().jYear();
    let startYear = currentYear - 20;
    for (let year = currentYear; year >= startYear; year--) {
        let yearInPersian = fixNumbers(year);
        let options = new CreateOptionElement("year", yearInPersian)
        selectedInHtml().append(options.createOption());
    }
}
ShowTheYearOfProductionOfCars()








