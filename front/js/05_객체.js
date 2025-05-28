function f01() {
    // const x = new onabort();
    const x = {};
    // x.title = "어린왕자";
    x["book title"] = "어린왕자"; //변수 명에 띄어쓰기가 들어가야 할 때, []로 변수명을 감싼다.
    x.price = 3000;

    console.log(x["book title"]);
    console.log(x.price);
}

function f02() {
    // 객체 생성
    const x = {}; 
    
    // 속성 추가
    x.name = "일성훈";
    x.age = 27;
    x.hello = () => {
        console.log("hi~~~");
    };

    console.log(x);

    x.hello();
    
}

function f03() {
    // 객체 생성
    const x = {};
    // 속성 추가
    x.title = "어린왕자";
    x.price = 3000;
    // 속성 출력
    // console.log(x.title);
    // console.log(x.price);
    
    for(let temp in x) {
        console.log(x[temp]);
    }
}

function f04() {
    // 객체 생성    
    const x = {
        title : "어린왕자",
        price : 3000
    };
    //객체의 속성 삭제
    delete x.price;
    // 객체 출력
    console.log(x);
    
}

//f05는 패스

function generateBook() {
    
    const x = {};
    x.title = "해리포터";
    x.price = 3000;
    
    return x;
}

function book() {
    this.title = "반지의 제왕";
    this.price = 200;
}   

function f06() {
    // const result = generateBook();
    const result = new book();
    console.log(result);
}

