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

var a = new Date(2011,7,5,2,1,1) - new Date(2011,7,5,1,1,1);
a = a/3600000; // 3600000 which is millisecond for 1 hour. Divide by this to get hours.
alert(a);

*/