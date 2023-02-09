// Author:Akhila
// Date:09/02/2023

function validate(){
    let name=document.getElementById("flname").value ;
    let n=document.getElementById("flname").value;
    let nregx=/^[a-z A-Z]{2,15}$/;
    let emil=document.getElementById("eml").value;
    let emlreg=/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    let plc=document.getElementById("package").value;
    let person=document.getElementById("persn").value;
    let dt=document.getElementById("arrival").value;

    if(name=="")
    {
        alert("Name field is empty");
        return false;
    }
    else if(!nregx.test(n)){
        alert("Enter Your currect Name");
        return false;
    }
    else if(emil=="")
    {
        alert(" Please enter your email id");
        return false;
    }
    else if(!emlreg.test(emil)){
        alert("Enter Your currect email id");
        return false;
    }
    else if(plc=="select")
    {
        alert("please select your package");
        return false;
    }
    else if(dt==""){
        alert("Date field is enmpty");
        return false;
    }
    else if(person==""){
        alert("Number of persons field is mandatory");
        return false;
    }
    else if(isNaN(person))
    {
        alert("enter a valid number");
        return false;
    }
    else if(
        document.getElementById("chbx1").checked== false&&
        document.getElementById("chbx2").checked== false&&
        document.getElementById("chbx3").checked== false
        ){
            alert("Check Box is empty");
            return false;
        }    
    else if(
        document.getElementById("agree").checked== false&&
        document.getElementById("disagree").checked==false
    ){
        alert("Please Select Condition");
        return false;
    }
    else{
        return true;
    }



}

