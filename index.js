var x = 10
var y = 20

console.log("x = " + x + " y = " + y)

x = x + y;
y = x - y
x = x - y
console.log("x =", x); // Output: x = 10
console.log("y =", y); // Output: y = 5

for (let i = 0; i <= 5; i++){
    // setTimeout(()=>{
    //     console.log('one ' + i);
    // }, 2000 * i)

    setTimeout(function(x) {
        console.log("two " + x);
    }.bind(this, i), i * 500);
}
var a = 123
var aa = 'test'
var b = String(a)
var c = String(aa)
console.log(typeof(b) + " " + b)
console.log(typeof(c) + " " + c)