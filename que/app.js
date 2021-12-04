// var queue={
//     data:[],
//     front:0,
//     rear:0,
//     size:100,
//     enQueue:function(el){
//         if((this.rear-this.front)==this.size){
//             console.log("overflow");
//             return
//         }
//         this.data.push(el);
//         this.rear++;     
//         return   
//     },
//     deQueue:function(){
//         if(this.front==this.rear){
//             console.log("underflow");
//             return
//         }
//         this.front++;
//         return this.data[this.front-1];        
//     }
// }