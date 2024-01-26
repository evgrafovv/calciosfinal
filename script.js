const numberButtons = document.querySelectorAll('.btnGray')
const actionButtons = document.querySelectorAll('.btnWhite, .btnOran')
const valueStr = document.getElementById('value')
const btnAc = document.getElementById('ac')
const btnResult = document.getElementById('result')
let action = ''
let res = ''
let array = []
let result = 0
for (let numberBtn of numberButtons) {
    if (valueStr.textContent === Number) { valueStr.textContent = '0' }
    numberBtn.onclick = () => {
        res += numberBtn.textContent
        valueStr.textContent = res
    }
}
console.log(actionButtons)

for (let numberAct of actionButtons) {
    numberAct.onclick = () => {
        action = numberAct.onclick
        array.push(res)
        array.push(numberAct.value)
        valueStr.textContent = '0'
        res = ''

    }
}
btnAc.onclick = () => {
    array = []
    res = ''
    action = ''
    valueStr.textContent = '0'
}

btnResult.onclick = () => {
    console.log(array)
    array.push(res)
    let arrStr = eval(array.join(''))
    console.log(arrStr)

    valueStr.textContent = Number(arrStr)
    array = []
    res = ''



}




