console.log('연습장');

// h1 태그 js로 가져오고, 콘솔로그로 출력하기

// const x = document.querySelector("h1");
// x.style.backgroundColor = "gray";
// console.log(x);

// 아이디가 target인 요소를 js로 가져오고, 배경색 변경하기
// const x = document.querySelector("#target");
// x.style.backgroundColor = "red";

// 클래스가 kh인 요소를 js 로 가져오고, 배경색 변경하기
// const x = document.querySelector(".kh");
// x.style.backgroundColor = 'blue';

// const x = document.querySelectorAll("ul > li");
// const y = document.querySelector("li")
// for (const i in x) {
//         x[i].style.backgroundColor = 'red';        
// }


// 문서에서 요소 가져오기. name 속성이 userId인 태그 출력하기기

// const x = document.querySelector("input[name = userId]");
// console.log(x);

// 문서에서 요소 가져오기. div 태그 가져오기. 출력하기

// const divTag =document.querySelector("div");
// console.log(divTag);

// function f01() {
//     // 요소에 클래스 추가하기
//     divTag.classList.add("box");
// }
// function f02() {
//     // 요소에 클래스 제거하기
//     divTag.classList.remove("box");
// }
// function f03() {
//     // 요소에 클래스 토글하기
//     divTag.classList.toggle("box");
// }

function changeBoxColor() {
    const khInput = document.querySelector("#kh-color");
    const str = khInput.value;
    
    const boxElem = document.querySelector("#kh-div");
    boxElem.style.backgroundColor = str;
    
}