var url=require('url');
var adr="http://localhost:8080/default.htm?year=2021&month=janauary";
var q=url.parse(adr,true);

console.log(q.host); //return localhost:8080
console.log(q.pathname); //default.htm
console.log(q.search); //?year=2021&month=janauary"

var qdata=q.query;//returns an object :{year:2021, month:january}

console.log(qdata.month);
console.log(qdata.year);
