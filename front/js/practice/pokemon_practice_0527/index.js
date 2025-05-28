const pokemonArr = [];
console.log(pokemonArr);

function addpokemon(params) {
    const pkNameTag = document.querySelector("input[name=pkName]").value;
    const pkTypeTag = document.querySelector("input[name=pkType]").value;

    const obj = {
        name : pkNameTag ,
        type : pkTypeTag
    };
    
    pokemonArr.push(obj);
    console.log(pokemonArr);
    
    alert("추가 되었습니다.");
    document.querySelector("input[name=pkName]").value = "";
    document.querySelector("input[name=pkType]").value = "";
    document.querySelector("input[name=pkName]").focus();
}

function enrollpokemon() {
    const jsonStr = JSON.stringify(pokemonArr);
    localStorage.setItem("pokemon",jsonStr);

    alert("등록 되었습니다.");
}

function selectpokemon() {
    const x = localStorage.getItem("pokemon");
    const arr = JSON.parse(x);

    console.log(arr);

    for (const obj of arr) {
        const liTag = document.createElement("li");
        liTag.innerText = obj.name + " / " + obj.type;

        const ulTag = document.querySelector("#pokemonUl");
        ulTag.appendChild(liTag);
    }
    
}