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

    document.querySelector("#custom-tip").value = ""

    buttonSelected = document.querySelector(`#button-${value}`)
    buttonSelected.classList.add("button-selected")

    calculate()
}  

function receiveCustomTipPercentageValue() {
    tipPercentage = document.querySelector("#custom-tip").valueAsNumber / 100

    removeClassButtonSelected()

    calculate()

}

function receiveTipPercentegeValue(value) {
    buttonSelected = Document.querySelector("")
}

function removeClassButtonSelected() {
    if(buttonSelected !== null)
        buttonSelected.classList.remove("button-selected")
    buttonSelected = null
}

function calculate() {
    if (bill !== 0 && tipPercentage !== 0 && numberOfPeople !== 0) {
        let tipAmountStrong = document.querySelector(".amount strong")
        let tipAmountPerPerson = (bill * tipPercentage) / numberOfPeople
        tipAmountStrong.innerText = `$${tipAmountPerPerson.toFixed(2)}`

        let totalStrong = document.querySelector(".total strong")
        let totalPerPerson = (bill / numberOfPeople) + tipAmountPerPerson

        totalStrong.innerText = `$${totalPerPerson.toFixed(2)}`
    }
}