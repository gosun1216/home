function f01() {
    // let x = new Array();
    // let x = new Array('사과', '딸기', '바나나');
    let x = ['java','oracle','html','css','js',123,true];
    let y = ['a','b','c',1 ,true];

    // let result = 
    // let result = x.indexOf('java');
    // let result = x.concat(y);
    // let result = x.join(" | ");
    // let result = x.reverse();
    // let result = x.sort();
    // let result = x.push("vagrant");
    // let result = x.pop();
    // let result = x.slice(2, 4);
    let result = x.splice(2,3, "민트초코", "하와이안피자");
    console.log(x);
    console.log(result);
    

}

f01();