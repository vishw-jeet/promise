// const cl=console.log;

const form=document.getElementById("form");
const email=document.getElementById("email");
const password=document.getElementById("password");


// jeet2227@gmail.com & 121212
const apiCall=(ele)=>{
    let promise = new Promise((resole,reject)=>{
        setTimeout(() => {
            if(ele.email==="jeet2227@gmail.com" && ele.password==121212){
                resole("login succsse")
            }else{
                reject('plz cheak username or password')
            }
        }, 1500);
    })
    return promise  
}
const onLoginForm=(eve)=>{
eve.preventDefault()
let obj={
    email:email.value,
    password:password.value
}

    apiCall(obj)
    .then((res)=>{
        Swal.fire({
            icon: 'success',
            title: res,
            timer:2000

    })})
    .catch((err)=>{
        Swal.fire({
            icon: err,
            title: err,
            timer:2000,
    })})
    .finally(()=>{
        form.reset()
    })
}
form.addEventListener("submit",onLoginForm);
