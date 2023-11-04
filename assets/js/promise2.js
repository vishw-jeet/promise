


const hrCall=()=>{
    return new Promise((resole,reject)=>{
        setTimeout(() => {
            let err= false
            if(!err){
                resole(`condidate Selected for First Round`)
            }else{
                reject(`candidate Is faceing Problem in basic`)
            }
        }, 2000);
    })
};
const firstRound=()=>{
        return new Promise((resole,reject)=>{
            setTimeout(() => {
                let err=false
                if(!err){
                    resole(`candidate is selected for 2nd Round`)
                }else{
                reject(`candidate Is faceing Problem in HTML`)
                }
            }, 1500);
        });
    }
        const secRound=()=>{
            return new Promise ((resole,reject)=>{
                setTimeout(() => {
                    let err=false
                    if(!err){
                        resole(`candidate is selected for ml Round`)
                    }else{
                        reject(`candidate Is need work on js`)
                    }
                },1000);
            })
        }        

        const mlRound=()=>{
            return new Promise ((resole,reject)=>{
                setTimeout(() => {
                    let err=false
                    if(!err){
                        resole(`candidate is selected comapasny`)
                    }else{
                        reject(`candidate Is good in js but need work on langue`)
                        reject(``)
                    }
                },1000);
            })
        }        

        const sallaryDiscushion=()=>{
            return new  Promise((resole,reject)=>{
                setTimeout(() => {
                    let err=false
                    if(!err){
                        resole(`welcome in our family`)
                    }else{
                        reject(`salary is not applicable`)
                    }
                }, 500);
            })
        }



hrCall()
.then((res)=>{
    cl(res)
   return firstRound()
})
.then((res)=>{
    cl(res)
   return secRound()
})
.then((res)=>{
    cl(res)
   return mlRound()
})
.then((res)=>{
    cl(res)
    return sallaryDiscushion()
})
.then((res)=>{
    cl(res)
})
.catch((err)=>{
    cl(err)
})