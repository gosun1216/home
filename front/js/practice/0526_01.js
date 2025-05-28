// 박스 만들기기
function f01() {
    const target = document.querySelector("#target");
    target.classList.add("box")
}
//red
function f02() {
    const target = document.querySelector("#target");
    target.style.backgroundColor = "red";
}
//blue
const blueBtn = document.querySelectorAll("button")[2];
blueBtn.addEventListener("click", () => {
    console.log("click ~~~~");
    
    const target = document.querySelector("#target");
    target.style.backgroundColor = "blue";
});

// input color
// input 태그의 value가 변경될 때, target 요소의 색상을 value 값으로 설정하기
const x = document.querySelector("input[type=color]");
// callback 함수 : 호출이 되야 실행 되는 함수
// addEventListener(이벤트, 콜백함수);

// EventListener : 어떠한 이벤트('change', 'click',...)가 발생 했을 때, 함수를 호출한다다.
    // 리스너는 이벤트 객체를 전달하면서 함수를 호출한다.
    // 이벤트.이벤트발생대상.value
    // 이벤트 객체는 함수의 파라미터에 변수명이 존재하면 생성된다? 이게 맞나
x.addEventListener("change", (evt) => {
    const target = document.querySelector("#target");
    target.style.backgroundColor = evt.currentTarget.value;    
});

