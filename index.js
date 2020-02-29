const TimeLapsed = require('./src/timeLapsed');

console.log('Timelased Version', TimeLapsed.version);

console.log(TimeLapsed.fromTimestamp('1529385554545xfgg', notation="twitter", unsafe=false));
try{
	console.log(TimeLapsed.fromTimestamp('1529385554545xfgg', notation="twitter"));
}catch(e){
	console.error(e.message);
}
console.log(TimeLapsed.fromTimestamp('1529385554545', notation="twitter"));
console.log(TimeLapsed.fromTimestamp('1529385554545'));
try{
	console.log(TimeLapsed.fromDateString('x2017-11-07 15:58:42.125836', notation="twitter"));
}catch(e){
	console.error(e.message);
}
console.log(TimeLapsed.fromTimestamp(1514811522125, notation="twitter"));
console.log(TimeLapsed.fromTimestamp(1516539522125, notation="twitter"));
console.log(TimeLapsed.fromTimestamp(1516539522125));
console.log(TimeLapsed.fromTimestamp(1516539522125, notation="mid"));
console.log(TimeLapsed.fromTimestamp('1515934722125', notation="twitter"));
console.log(TimeLapsed.fromTimestamp('1516633220341', notation="twitter"));
console.log(TimeLapsed.fromTimestamp('1516692513398', notation="twitter"));
console.log(TimeLapsed.fromTimestamp('1516692513398', notation="mid"));
console.log(TimeLapsed.fromTimestamp('1516627273202', notation="twitter"));
console.log(TimeLapsed.fromTimestamp('1510059522125', notation="twitter"));
console.log(TimeLapsed.fromDateString('2017-11-07 15:58:42.125836'));
console.log(TimeLapsed.fromDateString('2018-01-22T13:25:46.090Z'));
console.log(TimeLapsed.fromTimestamp('1516633220341'));
console.log(TimeLapsed.fromTimestamp('1516692513398'));
console.log(TimeLapsed.fromDateString('2016-01-22T13:25:46.090Z'));
console.log(TimeLapsed.fromTimestamp(1554820273088));
console.log(TimeLapsed.fromTimestamp(1554820273088, notation="twitter"));
console.log(TimeLapsed.fromTimestamp(1554820273088, notation='mid'));
console.log(TimeLapsed.fromDateString('2019-01-02T21:00:00.000Z', notation='twitter'));
console.log(TimeLapsed.fromDateString('2019-01-02T21:00:00.000Z'));
console.log(TimeLapsed.fromTimestamp(1582972637984));
console.log(TimeLapsed.fromTimestamp(1582972637984, notation="twitter"));
console.log(TimeLapsed.fromTimestamp(1582972637984, notation='mid'));

