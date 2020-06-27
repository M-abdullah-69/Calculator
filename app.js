function btn(num){
    var result = document.getElementById("output");
    result.value += num;
}

function clearResult(){
    var result = document.getElementById("output");
    result.value = "";
}

function Equal(){
    var result = document.getElementById("output");
    result.value = eval(result.value);
}
