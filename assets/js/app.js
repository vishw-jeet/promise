const cl=console.log;


// // Promise:>>>> its a javascript object ,its gives same values in future



// //  benifit of Promise-----> 
// // 1)-better to handele asynq behevier of 
// // 2)-better to error handling
// //  3)_ it improv redalbility of code
// // 4) better flow of control asinq bihevier

// // state 
// //  1_--> pendding -- waiting to result /either sccusse or fail
// // 2---> resolve------- data is succsses fully fatched
// // 3---> reject -------data is rejected 
// // 4----> satteld------data is either resolve or reject

// // how to creat a promise
// let aarry=[{
//     name :"sachin",
//     jrNUM :10
// }]

// function name1(ele) {
//     let promise= new Promise((resolve,reject)=>{
//         setTimeout(() => {
//                 let err=Math.random()>=0.5? false :true;
//                 if(!err){
//                     resolve(`data is fatched successfully!!!!!!!!!!`)
//                 }else{
//                     reject(`something went wrong`)
//                 }
//         }, 1500);
//         // aarry.push(ele)
//     })
//     return promise
// }

// name1()
// .then((res)=>{
//     cl(res)
// }).catch((err)=>{
//     cl(err)
// })

// name1();