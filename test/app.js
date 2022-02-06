function rmDuplicate(arr){
    var arr_=[];
    for(i in arr)
    if(!arr_.includes(arr[i]))
    arr_.push(arr[i]);
    console.log(arr_)
}
var test=[1,2,3,4,5,5,6,1,23,4,5]
rmDuplicate(test);