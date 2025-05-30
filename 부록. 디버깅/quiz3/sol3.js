// const obj = {
//    0: '10',
//    1: '20',
// }

const obj = ['10', '20']

// 에러의 발생 원인: obj가 배열이 아니므로 for of에서 반복 할 수 X

for (let val of obj) {
   console.log(val)
}
