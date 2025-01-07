function databaseSharing (){
    console.log("Data stored successfully");

}

function submitForm(formMsg,dbs){
    setTimeout(()=>{
    dbs()
    console.log(formMsg);
},2000)
}

submitForm("Form Submitted successfully",databaseSharing)