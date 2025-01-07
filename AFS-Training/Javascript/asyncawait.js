async function funname()
{
    setTimeout(()=>{
        console.log("Hello");
    },5000)
    console.log(await "Hello")
}
arrowFunName=async()=>
{
    setTimeout(()=>{
        console.log("KEC");
    },4000)
}
funname();
arrowFunName();


async function funname()
{
    console.log("Hello");
}
arrowFunName=async()=>
{
    console.log("KEC");
}

funname();
arrowFunName();