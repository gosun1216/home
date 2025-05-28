const todoArr = [];
function addTodo() {
    //content 입력받기
    const content = document.querySelector("input[name=content]").value;
    //manager 입력받기
    const manager = document.querySelector("input[name=manager]").value;
    //content + manager 객체 만들기
    const obj = {
        content : content ,
        manager : manager
    };
    //배열에 객체넣기
    todoArr.push(obj); 
    console.log(todoArr);
}

function enrollTodo() {
    // 로컬 스토리지에 todoArr 저장
    const jsonStr = JSON.stringify(todoArr);
    localStorage.setItem("todo", jsonStr);
}

function selectTodo() {
    const x = localStorage.getItem("todo");
    
    const arr = JSON.parse(x);          // JSON 형식의 문자열 -> JS객체(또는 배열)에 맞게 변환
    // 화면에서 todo 조회
    for (let obj of arr) {
        const h3tag = document.createElement("h3");
        h3tag.innerText = obj.manager + " / " + obj.content;

        const divTag = document.querySelector("#todo-list");
        divTag.appendChild(h3tag);
        
    }

}

