function f01() {
    // window.open("https://www.naver.com/", "abc", "width=500 height=600");
    // setTimeout
    // window.setTimeout(() => {
    //     console.log("hello~~~~");
        
    // }, 3000);

    // setInterval
    // window.setInterval(() => {
    //     console.log("hello~~~~");
        
    // }, 3000);
}

function f02() {
    // console.log(location);

    // location.reload();
    // location.href = "https://www.naver.com/";
    // location.assign("https://www.naver.com/");
    // location.replace("https://www.naver.com/");
    
}

function f03() {
    // console.log(history);

    // history.back();
    // history.forward();
    // history.go(-1);
    // history.go(1);
    
}

const btn04Tag = document.querySelector("#btn04");

btn04Tag.onclick = () => {
    console.log(navigator);
};

const btn05 = document.querySelector("#btn05");

btn05.onclick = () => {
    console.log(screen);
    
};