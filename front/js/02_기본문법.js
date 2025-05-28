// 변수와 자료형
// 전역 변수 선언

// x1 = '전역변수';
// console.log(x1);

x = 5;

function f01() {
    // console.log(x1);
    // let x1 = "지역변수";
    // const x1 = "const";

    // hoisting  
    // console.log(x);
    // if (true) {
    //     let x = 10;
    // }

    x = 10;
console.log(x);
}

function f02() {
    console.log(x);
}

// f01();
// f02();

// =====================================

// 자료형
function f03() {
    let name = "이성훈";
    let age = 26;
    let height = 170.3;
    let isAdult = true;
    let hobbies = ["코딩","HTML","CSS","JAVA","SQL","JS"];
    let eat = abc;
    
    function abc() {
        console.log("eatting~~");
    };

    let job = null;

    // type이 궁금할 때 : typeof 변수명 
    console.log(typeof name);
    console.log(typeof age);
    console.log(typeof height);
    console.log(typeof isAdult);
    console.log(typeof hobbies);
    console.log(typeof eat);
    console.log(job);
    
    // eat();
    // 함수 호출시, () 꼭 붙히기
}

// f03();

// =======================================
// 형변환
function f04() {
    // let a = 1+2;
    // let a = '1'+2;
    // let a = 1 + 2 + '3';
    // let a = 5 - 3;
    // js의 신비로운 사실
    // let a = 0 == "0";
    // let a = 0 == [];
    // let a = "0" == [];

    // let a = "hello" * 3;
    // NaN : Not a Number

    // let a = 2 + Number('3');
    
    // let a = 1 == "1";
    // let a = 1 != "1";
    // let a = 1 === "1";
    let a = 1 !== "1";
    
    console.log(a);
}

// f04();

// =======================================
// 제어문

function f05() {
    let a = [10, 20, 30, 40, 50];

    // for (let i = 0; i < a.length; ++i) {
    //     console.log(a[i]);
    // }
// for (const i in a) {
//         console.log(a[i]);
//     }

for (const i of a) {
    console.log(i);
    }
}

f05();
