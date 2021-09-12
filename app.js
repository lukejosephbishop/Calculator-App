let heldValue = null;
let heldOperation = null; 
let nextValue = null;

function clearAll(){
    heldValue = null;
    heldOperation = null; 
    nextValue = null;
    
}


/*Display*/

function showValue(location, value) {
if (value === null){
    $(location).text("")
} else {
    $(location).text(Number(value))
}
}

function updateDisplay() {
    showValue(".held-value", heldValue)
    showValue('.next-value', nextValue)
    
}

function setHeldOperation(operation) {
    if(heldOperation !== null){
        heldValue = heldOperation(heldValue, nextValue);
        
    } else if (nextValue !== null){
        heldValue = nextValue
    } 
    nextValue = null
    heldOperation = operation
   

}


/* numbers on calculator */

$(".digits button").click(function (){
   if (nextValue === null) {
    nextValue = 0
}
    nextValue += $(this).text()
    $('.next-value').text(nextValue)
    console.log(nextValue)
    updateDisplay()
})

/* add operation */

$(".add").click(function (){
    setHeldOperation(add)

    $(`.next-operation`).text('+')
    console.log($(this).text())
    updateDisplay() 
    
})
function add(x, y) {
    return Number(x) + Number(y)
}

/* subtract  operation */

$(".subtract").click(function (){
     setHeldOperation(subtract)

    $(`.next-operation`).text('-')
    console.log($(this).text())
    updateDisplay() 
})

function subtract(x, y) {
    return Number(x) - Number(y)
}
/* multiply  operation */

$(".multiply").click(function (){
    setHeldOperation(multiply)

    $(`.next-operation`).text('*')
    console.log($(this).text())
    updateDisplay() 
})

function multiply(x, y) {
    if (x === 0 || y === 0) {
return 0
    } else {
    return Number(x) * Number(y)
    }
}
/* divide  operation */

$(".divide").click(function (){
    setHeldOperation(divide)

    $(`.next-operation`).text('/')
    console.log($(this).text())
    updateDisplay() 
})
function divide(x, y) {
    if (x === 0 || y === 0) {
        return  0
            } else {
    return Number(x) / Number(y)
            }
}

/* equals  operation */

$(".equals").click(function (){
    setHeldOperation(null) 
    $(`.next-operation`).text("")
    updateDisplay()
    console.log($(this).text())
})
/* clear-all */


$(".clear-all").click(function (){
   clearAll()
   $(`.next-operation`).text("")
   updateDisplay()
    console.log($(this).text())
})

/* clear-entry */


$(".clear-entry").click(function (){
   clearEntry()
   updateDisplay()
    console.log($(this).text())
})


if ($(".held-value").text() === Infinity){
    $(".held-value").remove(Infinity)
    $(".held-value").text(Number(0))
    updateDisplay()
}