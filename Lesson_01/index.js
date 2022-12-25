
var light = true;
var container = document.getElementById("container");

function changeColor(){
    if(light == true){
        container.style.backgroundColor = "black";
        light = false;
    }else{
        container.style.backgroundColor = "white";
        light = true;
    }
}

function cau2(){
    var cd = prompt("Chieu dai")
    var cr = prompt("Chieu rong")

    var cv = (cd*1 + Number(cr))*2;
    var dt = cd*cr;

    alert("chu vi = "+cv+" dien tich: "+dt)
}

function cau3(){
    for(var i = 1;i<=100;i++){
        if(i%2==0 && i%3==0){
            console.log(i);
        }
    }
}