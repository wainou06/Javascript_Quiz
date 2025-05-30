const obj = ['10', '20']

// 에러의 원인: forEach는 배열에서만 사용가능
// not a function -> 적용 대상을 잘못 사용(JSON객체에서 forEach 함수 지원 X)

obj.forEach((element) => {
   console.log(element)
})
