let result=document.getElementById("calc_display");

function display(num){
    calc_display.value += num;
}
function calculate(){
    try{
        calc_display.value = eval(calc_display.value);
    }
    catch(error){
        alert("Something Went Wrong!");
    }
}

function Clear(){
    calc_display.value = "";
}
function del(){
    calc_display.value = calc_display.value.slice(0,-1);
}