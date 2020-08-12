var a = 2, b = 1; 
var result = --a - --b + ++b + b--; 
document.write(--a+"Value of a is prefix decrement<br>");
document.write(--a - --b +"\tValue of a and b is prefix decrement and a-b<br>");
document.write(--a - --b + ++b+"\tValue of a and b is prefix decrement,then prefix increment of b and a-b+b<br>");
document.write(--a - --b + ++b + b-- +"\tValue of a and b is prefix decrement,then prefix increment of b,then postfix decrement of b and a-b+b+b<br>");
document.write("a is:"+a);
document.write("b is:"+b);
document.write("So thats why the result is:"+result);