// 고전
const btn01 = document.querySelector("#btn01");
btn01.onclick = () => {
    console.log("고전~~~");
};

// 인라인
function handleClick() {
    console.log("인라인~~~");
}

// 표준
const btn03 = document.querySelector("#btn03");
btn03.addEventListener("click", () => {
    console.log("표준~~~");
});

// 이벤트가 발생한 요소 객체 접근
const btn04 = document.querySelector("#btn04");
// 콜백 함수 쓸 때, 선언적 함수를 사용하면 함수 명만 적어야한다. (f01 : O, f01() : X)
btn04.addEventListener("click", f01);

function f01( evt ) {
    console.log("f01 ~~");
    console.log(evt.target);
    //JS의 this는 java의 this랑 다르다.
    // console.log(this);
}

// 기본 이벤트 제거거
function test01() {
    const x = confirm('네이버 이동하시나요?');
    return x;
}