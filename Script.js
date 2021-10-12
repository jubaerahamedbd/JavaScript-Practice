//Inner text
const para = document.querySelector('p')
const paraAll = document.querySelectorAll('p') //select all paragraph item

para.innerText = 'Changed Text' //change text

console.log(para.textContent) //show all hidden space and elements also
console.log(para.innerText) //show text only
