let bill = 0
let tipPercentage = 0
let numberOfPeople = 0

let billInput = document.querySelector("#bill")
billInput.addEventListener("input", receiveBillValue)

let numberOfPeopleInput = document.querySelector("#people")
numberOfPeopleInput.addEventListener("input", receiveNumberOfPeopleValue)

function receiveBillValue() {
    bill = billInput.valueAsNumber
    calculate()
}

function receiveNumberOfPeopleValue() {
    numberOfPeople = numberOfPeopleInput.valueAsNumber
    calculate()

}

    function calculate(){
        if(bill !== 0 && tipPercentage !== &&  numberOfPeople !== 0){
            console.log("eh possivel calcular")
        } else {
            console.log("ainda nao da! preencha tudo")
        }
    }