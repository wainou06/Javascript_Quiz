const op1 = document.querySelector('#op1')
const op2 = document.querySelector('#op2')

// 오타 #oper
const selectBox = document.querySelector('#oper')
const answer = document.querySelector('#answer')

//#opar은 없으므로 addEventListener 할 대상이 없기에 오류
selectBox.addEventListener('change', (e) => {
   let result = 0
   var value = selectBox.options[selectBox.selectedIndex].value

   switch (value) {
      case 'plus':
         result = Number(op1.value) + Number(op2.value)
         break
      case 'minus':
         result = Number(op1.value) - Number(op2.value)
         break
   }

   answer.textContent = result
})
