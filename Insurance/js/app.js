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










