document.getElementById('clic').addEventListener('click',add);
function add(){
var x=parseInt(document.getElementById('n1').value);
var y=parseInt(document.getElementById('n2').value);
document.getElementById('result').innerHTML=x-y;
return false;

}
