let count = 0;

document.getElementById("decreaseBtn").onclick = function(){
    count = count-1;
    document.getElementById("count-label").innerHTML = count;
}


document.getElementById("increaseBtn").onclick = function(){
    count = count +1;
    document.getElementById("count-label").innerHTML = count;
}

document.getElementById("resetBtn").onclick = function(){
    count = 0;
    document.getElementById("count-label").innerHTML = count;
}