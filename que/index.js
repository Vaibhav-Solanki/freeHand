function fun(el){
    var ele= JSON.parse(JSON.stringify(el));
    console.log(ele)
}
var arr={a:1,b:0};
fun(arr);