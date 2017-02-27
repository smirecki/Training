// Date()
/*
var start = Date.now();
var start2 = new Date("December 25, 1995 23:15:00");

var foo = start - 1;

console.log(foo);


var bar = start.getDate();
*/

var d = new Date();
console.log(d.getTime);

/*
http://jsfiddle.net/jfriend00/NYSsp/

var prevTime = new Date(2014,8,1,0,0);  // Aug 1, 2014
var thisTime = new Date();              // now
var diff = thisTime.getTime() - prevTime.getTime();   // now - Aug 1
alert(diff / (1000*60*60*24));     // positive number of days

http://jsfiddle.net/w5tpncxd/
http://jsfiddle.net/w5tpncxd/1/
http://jsfiddle.net/w5tpncxd/2/
=======================
//var a = 2 - 1;
var a = new Date();
var b = new Date(2014,7,24,10,28,1);
var c = a - b;
var d = b + 22350000;
var year = 2014;
var month = 8;
var day = 1;
var hour = 22;
var minute = 45;
var e = new Date(year, month, day, hour, minute);

//foo = 3600000 * 6.25
//a = a/360000; // 3600000 which is millisecond for 1 hour. Divide by this to get hours.
console.log(a);
console.log(b);
console.log(b + 22350000);
console.log(c);
console.log(c/60000)
console.log(d);
console.log(e);
//alert(c);
//alert(new Date());

//14:58

=======================
var a = new Date(2011,7,5,2,1,1) - new Date(2011,7,5,1,1,1);
a = a/3600000; // 3600000 which is millisecond for 1 hour. Divide by this to get hours.
alert(a);

*/