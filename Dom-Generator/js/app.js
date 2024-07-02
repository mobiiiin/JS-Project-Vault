import domGenerator from "/node_modules/dom-generator/dist/domGenerator.js";

// this function just for dom-generators
function domGenerators() {
    // create div element whit dom-generator
    let parentDivNameUniverSities = domGenerator({
        tag: "div",
        attributes: {
            class: "parent-name-universities",
        }
    })

    // create input element whit dom-generator
    let nameUniverSities = domGenerator({
        tag: "input",
        attributes: {
            id: "name-universities",
            placeholder: "just type name your university",
            type: "text"
        }
    })

    // create div element whit dom-generator
    let backgroundColorImages = domGenerator({
        tag: "div",
        attributes: {
            class: "background-color-images",

        }
    })

    // create img element whit dom-generator
    let khalijeFars = domGenerator({
        tag: "img",
        attributes: {
            class: "image-khalije-fars",
            src: "./assets/images/khalije-fars.png",

        },
    })

    // create p element whit dom-generator
    let textContenKhalijeFars = domGenerator({
        tag: "p",
        attributes: { id: "text-content-khalije-fars" },
        properties: { textContent: "daneshgah khalije fars" }
    })
    addToBody(parentDivNameUniverSities, nameUniverSities, backgroundColorImages, khalijeFars, textContenKhalijeFars);
}
domGenerators()

// this function for adding(append) elements to body
function addToBody(parentDivNameUniverSities, nameUniverSities, backgroundColorImages, khalijeFars, textContenKhalijeFars) {
    // sending to body
    document.body.append(parentDivNameUniverSities);
    parentDivNameUniverSities.append(nameUniverSities);

    // this eventlistener for seda zadan function foundUniversity
    nameUniverSities.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
            foundUniversity(nameUniverSities.value, backgroundColorImages, khalijeFars, textContenKhalijeFars)
        }
    })
}

// This function is used to check whether the input value is the same as specified or not
function foundUniversity(inputValue, backgroundColorImages, khalijeFars, textContenKhalijeFars) {
    if (inputValue.includes("خلیح فارس")) {
        // sending to body
        document.body.append(backgroundColorImages);
        backgroundColorImages.append(khalijeFars);
        backgroundColorImages.append(textContenKhalijeFars);

        
    }

    else {
        alert("فقظ اسم دانشکاه و همجنین غلط املایی نداشته باشه");
    }
}