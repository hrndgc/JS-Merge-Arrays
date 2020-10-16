document.querySelector("button").addEventListener("click", mergeArray);

function mergeArray() {
    const array_1 = document.querySelector("#array_1").value.trim(" ");
    const array_2 = document.querySelector("#array_2").value.trim(" ");
    let result;

    if(array_1 === ""){
        result = array_2.split(" ");
    }
    else if(array_2 === ""){
        result = array_1.split(" ");
    }
    else {result = [...array_1.split(" "), ...array_2.split(" ")]};

    let uniqueResult = [...new Set(result)].map(item => parseFloat(item))
    console.log(uniqueResult);

    document.querySelector("#result").innerText = uniqueResult.sort((a, b) => a-b);
};