// 선언적 함수
// function f01() {
//     console.log("test01 called...");
// }
// f01();

// 익명 함수
// const f01 = function () {
//     console.log("익명함수 실행됨...");
// }

// 버튼 태그 가져옴.이벤트 리스너 추가(클릭, f01);
// const btn01 = document.querySelector("#btn01");
// btn01.addEventListener("click", function(){
//     console.log("테스트 확인~~");
// });

// 스스로 실행하는 함수
// (function f00(a, b) {
//     console.log("f00 실행됨..");
//     console.log(a+b);
// })(1,2);

// 화살표 함수
// const f01 = () => {
//     console.log("화살표 함수 실행됨~~~");
// };

// 매개변수
// function f02(a, b, c) {
//     console.log("f02 called...");
//     console.log(arguments);
    
// }

// f02(10, 20);

// 리턴
function f03() {
    console.log("f03 called...");
    const x = () => {
        console.log("화살표 함수입니다.");
    };
    return x;
}

// const result = f03();
// console.log(result);

// isFinite
// const result = isFinite(1/2);
// console.log(result);

// isNaN
// const result = "1" * 3;
// console.log(isNaN(result));

// eval
const str = "1+2+3";
const result = eval(str);
console.log(result);

