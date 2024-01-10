    
var unidimensional = ['HTML', 1993, 'CSS', 1996, 'Bootstrap', 2011, 'JS', 1995, 'React', 2013, 'Java', 1995];
console.log(unidimensional);
console.log(unidimensional.length);
console.log(unidimensional.join(' / '));
console.log(unidimensional.unshift("IOS"));
console.log(unidimensional);

var bidimensional = [['HTML', 1993, 'CSS', 1996], ['Bootstrap', 2011, 'JS', 1995], ['React', 2013, 'Java', 1995]];
console.log(bidimensional);
console.log(bidimensional.length);
console.log(bidimensional[2][1]);
bidimensional[1][2] = "Javascript";
console.log(bidimensional);
delete bidimensional[2][2];
console.log(bidimensional);
bidimensional[2].push('pipoca');
console.log(bidimensional);
