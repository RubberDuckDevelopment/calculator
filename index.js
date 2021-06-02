setUpCalculator()

let enteredValue = 0
let shownValue = 0
let currentOperator = ""
let calculatedValue=0

function setUpCalculator(){
    const container = document.getElementById("container")

    //result 
    const result = document.createElement("div")
    result.className="result"
    result.id="result"
    result.textContent=0

    container.appendChild(result)

    //clear
    const clear = document.createElement("button")
    clear.className="button clear"
    clear.name="clear"
    clear.textContent="Clear"
    clear.style.gridColumnStart="1"
    clear.style.gridColumnEnd="3"
    clear.addEventListener("click",clickButton)
    
    container.appendChild(clear)

    //delete
    const deleteBtn = document.createElement("button")
    deleteBtn.className="button clear"
    deleteBtn.name="delete"
    deleteBtn.textContent="Delete"
    deleteBtn.style.gridColumnStart="3"
    deleteBtn.style.gridColumnEnd="5"
    deleteBtn.addEventListener("click",clickButton)
    
    container.appendChild(deleteBtn)

    //DIGITS START HERE

    let cell
    for (let i=0;i<3;i++){
        //1
        cell = document.createElement("button")
        cell.className="digit item"
        cell.name="digit"
        cell.textContent=(i+1).toString()
        cell.value=i+1
        cell.addEventListener("click",clickButton)
        container.appendChild(cell)
    }

    cell = document.createElement("button")
    cell.className="operator item"
    cell.name="operator"
    cell.textContent="+"
    cell.value="+"
    cell.addEventListener("click",clickButton)
    container.appendChild(cell)

    for (i=3;i<6;i++){
        //1
        cell = document.createElement("button")
        cell.className="digit item"
        cell.name="digit"
        cell.textContent=(i+1).toString()
        cell.value=i+1
        cell.addEventListener("click",clickButton)
        container.appendChild(cell)
    }

    cell = document.createElement("button")
    cell.className="operator item"
    cell.name="operator"
    cell.textContent="-"
    cell.value="-"
    cell.addEventListener("click",clickButton)
    container.appendChild(cell)

    for (i=6;i<9;i++){
        //1
        cell = document.createElement("button")
        cell.className="digit item"
        cell.name="digit"
        cell.textContent=(i+1).toString()
        cell.value=i+1
        cell.addEventListener("click",clickButton)
        container.appendChild(cell)
    }


    cell = document.createElement("button")
    cell.className="operator item"
    cell.name="operator"
    cell.textContent="*"
    cell.value="*"
    cell.addEventListener("click",clickButton)
    container.appendChild(cell)

    cell = document.createElement("button")
    cell.className="digit item"
    cell.name="digit"
    cell.textContent="."
    cell.value="."
    cell.style.gridColumnStart="1"
    cell.addEventListener("click",clickButton)
    container.appendChild(cell)

    cell = document.createElement("button")
    cell.className="digit item"
    cell.name="digit"
    cell.textContent="0"
    cell.value="0"
    cell.style.gridColumnStart="2"
    cell.addEventListener("click",clickButton)
    container.appendChild(cell)

    cell = document.createElement("button")
    cell.className="enter operator item"
    cell.name="digit"
    cell.textContent="="
    cell.value="="
    cell.style.gridColumnStart="3"
    cell.addEventListener("click",clickButton)
    container.appendChild(cell)

    cell = document.createElement("button")
    cell.className="operator item"
    cell.name="digit"
    cell.textContent="/"
    cell.value="/"
    cell.style.gridColumnStart="4"
    cell.addEventListener("click",clickButton)
    container.appendChild(cell)

}


function clickButton(e){
    if (e.target.className.includes("digit")){
        console.log('digit', e.target.value)

        switch (currentOperator){
            case "+":
                calculatedValue = add(enteredValue,shownValue)
                console.log(calculatedValue)
                break
            case "-":
                calculatedValue = subtract(enteredValue,shownValue)
                console.log(calculatedValue)
                break
            case "*":
                calculatedValue = multiply(enteredValue,shownValue)
                console.log(calculatedValue)
                break
            case "/":
                calculatedValue = divide(enteredValue,shownValue)
                console.log(calculatedValue)
                break
            case "=":
                updateResult(calculatedValue)
                break
            default:
                shownValue += e.target.value
                updateResult(shownValue)
            }

    }
    else if (e.target.className.includes('operator')) {
        console.log('operator')
        console.log(enteredValue)
        console.log(e.target.value)
        currentOperator = e.target.value
        updateResult(calculatedValue)
    } else{
        //clear & delete buttons
        if (e.target.name === "clear"){
            enteredValue=0
            shownValue = 0
            currentOperator=""
            calculatedValue=0
            updateResult(enteredValue)

        }
    }


}

function updateResult(value){
    document.getElementById("result").textContent = value
}

function add(a,b){
   //on click event - capture the e.target.value (aka the #)
   //add it to the current stored value (if any -default =0)
   //return a+b to the Result Text
   return parseFloat(a) + parseFloat(b)
}

function subtract(a,b){
    return parseFloat(a) + parseFloat(b)
}

function multiply(a,b){
    return parseFloat(a) * parseFloat(b)
}

function divide(a,b){
    if (b===0){
        return "hey!"
    }
    return parseFloat(a) / parseFloat(b)
}