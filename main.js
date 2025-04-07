let bill = 0
let tipPercentage = 0
let numberOfPeople = 0
let buttonSelected = null

let billInput = document.querySelector("#bill")
billInput.addEventListener("input", receiveBillValue)

let numberOfPeopleInput = document.querySelector("#people")
numberOfPeopleInput.addEventListener("input", receiveNumberOfPeopleValue)

function receiveBillValue() {
    bill = billInput.valueAsNumber
    calculate()
}

function receiveNumberOfPeopleValue() {
    tipPercentage = value / 100

    removeClassButtonSelected()

    buttonSelected = document.querySelector(`#button-${value}`)
    buttonSelected.classList.add("button-selected")

}

function receiveTipPercentegeValue(value) {
    buttonSelected = Document.querySelector("")
}

function removeClassButtonSelected() {
    if(buttonSelected !== null)
        buttonSelected.classList.remove("button-selected")
    buttonSelected = null
}


    function calculate(){
        if(bill !== 0 && tipPercentage !== && numberOfPeople !== 0){
            console.log("eh possivel calcular")
        } else {
            console.log("ainda nao da! preencha tudo")
        }
    }