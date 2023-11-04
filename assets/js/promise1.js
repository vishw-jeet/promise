// const cl=console.log;

const titleControl=document.getElementById('title');
const contentControl=document.getElementById('content');
const submitbtn=document.getElementById('submitbtn');
const blogsForm=document.getElementById("blogsForm");
const blogCard=document.getElementById("blogCard");


const blogsArrey=[];
cl(blogsArrey);

const onSubmit=(eve)=>{
 eve.preventDefault();
    let obj={
        title: titleControl.value,
        content:contentControl.value,
    }
    // cl(obj)
    
     creatBlogs(obj)
     .then((res)=>{
            blogsArrey.push(res)   
          return  readBlogs()
     })
         .then((res)=>{
            templetingBlogs(res);
            cl(res);
     })
     .catch((err)=>{
             cl(err)
     })
     .finally(()=>{
        blogsForm.reset();
     })
};

const creatBlogs=(ele)=>{
    let promise= new Promise((resole,reject)=>{
        setTimeout(() => {
            let err= false
            if(!err){
                resole(ele)
            }else{
                reject(`something Went Wrong When Creating Blogs`)
            }
        }, 1500);
    })
    return promise
};

const readBlogs=(ele)=>{
    let promise =new Promise((resole,reject)=>{
        setTimeout(() => {
            let err=false
            if(!err){
                resole(blogsArrey)
            }else{
                reject(`someting went Wrong when Reading Blogs`)
            }
        }, 1000);
    })
    return promise
}


const templetingBlogs=(ele)=>{
    let result=''
 ele.forEach(ele => {
                result+=`
                <div class="col-md-4">
                <div class="card">
                <div class="card-header">
                    <h2>${ele.title}</h2>
                </div>
                <div class="card-body">
                    ${ele.content}
                </div>
                <div class="card-footer d-flex justify-content-between">
                    <button class="btn btn-primary">Update</button>
                    <button class="btn btn-danger">Delete</button>
                </div>
                </div>
            </div>
    `
 });
    blogCard.innerHTML=result;
}
    templetingBlogs(blogsArrey);

blogsForm.addEventListener("submit",onSubmit)