function solve(val) {
    var v = document.getElementById('screen');
    v.value += val;
 }
 function result() {
    var num1 = document.getElementById('screen').value;
    var num2 = eval(num1);
    document.getElementById('screen').value = num2;
 }
 function Clear() {
    var inp = document.getElementById('screen');
    inp.value = '';
 }
 