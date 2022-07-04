// let abc = prompt("enter your total marks");
// let xyz = prompt("enter obtain mairks");
// let abc1 = xyz /abc *100;
// alert(abc1 + "%") ;

function calculate() {

    
    let totalMarks = document.querySelector("#totalMarks").value;
    let obtainMarks = document.querySelector("#obtainMarks").value;
    let result = obtainMarks * 100/totalMarks;
    document.querySelector("#result").innerHTML="tou have got" + result + "%"; 
    
}