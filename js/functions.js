const list = document.querySelector('#numbers')
const additionalList = document.querySelector('#additional-numbers')

let numbers = []
let rowIndex = 0;
while (rowIndex < 7) {
  const randomNumber = Math.floor(Math.random() * 37 + 1)
  if (!numbers.includes(randomNumber)) {
    numbers.push(randomNumber)
    rowIndex++
  }
}

numbers.sort((a, b) => a - b);
const row = list.insertRow()
for (let i = 0; i < numbers.length; i++) {
  const col = row.insertCell(i)
  col.innerHTML = numbers[i]
}

let additionalNumbers = []
let additionalRowIndex = 0
while (additionalRowIndex < 2) {
  const randomNumber = Math.floor(Math.random() * 37 + 1)
  if (!numbers.includes(randomNumber) && !additionalNumbers.includes(randomNumber)) {
    additionalNumbers.push(randomNumber)
    additionalRowIndex++
  }
}

additionalNumbers.sort((a, b) => a - b);
const additionalRow = additionalList.insertRow()
for (let i = 0; i < additionalNumbers.length; i++) {
  const col = additionalRow.insertCell(i)
  col.innerHTML = additionalNumbers[i]
}