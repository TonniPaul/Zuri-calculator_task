let select = prompt("What mathimatical function would you like to perform, Reply with +, -, *, / 0r %");
let maths = ["+", "-", "*","/","%"];
let numberOne, numberTwo, sum;
if (select === maths[0]){
   numberOne = prompt("Number One", );
   numberTwo = prompt("Number Two", );
   sum = Number(numberOne + numberTwo);
   alert(`${numberOne} ${select} ${numberTwo}= ${sum}`);
}else if(select === maths[1]){
   numberOne = prompt("Number One", );
   numberTwo = prompt("Number Two", );
   sum = Number(numberOne - numberTwo);
   alert(`${numberOne} ${select} ${numberTwo}= ${sum}`);
}else if(select === maths[2]){
   numberOne = prompt("Number One", );
   numberTwo = prompt("Number Two", );
   sum = Number(numberOne * numberTwo);
   alert(`${numberOne} ${select} ${numberTwo}= ${sum}`);
}else if(select === maths[3]){
   numberOne = prompt("Number One", );
   numberTwo = prompt("Number Two", );
   sum = Number(numberOne / numberTwo);
   alert(`${numberOne} ${select} ${numberTwo}= ${sum}`);
}else if(select === maths[4]){
   numberOne = prompt("Number One", );
   numberTwo = prompt("Number Two", );
   sum = Number(numberOne % numberTwo);
   alert(`${numberOne} ${select} ${numberTwo}= ${sum}`);
}else{
   alert('Invalid Input')
}