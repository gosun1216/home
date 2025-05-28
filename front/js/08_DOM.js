// 노드 생성
// 텍스트 노드가 있는 요소
function f01() {
    // node 생성 : a = 요소노드, b = 텍스트노드
    const a = document.createElement("h1");
    const b = document.createTextNode("Hi~~~~~~~");

    //a 노드 안에 b 노드 넣기
    a.appendChild(b);

    // 바디태그 자식으로 넣기
    const x =document.querySelector("body");
    x.appendChild(a);
}
// 텍스트 노드가 없는 요소
function f02() {
    const imgTag = document.createElement("img");

    console.log(imgTag);

    imgTag.src = "https://dummyimage.com/600x400/000/fff&text=zzz";

    const x = document.querySelector("body");
    x.appendChild(imgTag);
}
// node 삭제
function f03() {
    const a = document.createElement("h1");
    a.remove();
}