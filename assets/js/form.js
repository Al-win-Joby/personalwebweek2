function isname(){
    let name_x=document.getElementById("name").value
    let regex =/^[a-zA-Z]+[ a-zA-Z]{2,30}$/;
    let x=0
    
    if(regex.test(name_x))
    {
        document.getElementById("name").style.border= "2px solid green"
        document.getElementById("namee").innerHTML=""
       
        x=0
    }
    
    else{
        document.getElementById("name").style.border= "2px solid red"
        x=1
        document.getElementById("namee").innerHTML="Enter alphabets"
       
}
}
function isemail(){
    let name_x=document.getElementById("email").value
    let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    console.log("yes")
    if(regex.test(name_x))
    {
        document.getElementById("email").style.border= "2px solid green"
        document.getElementById("emaile").innerHTML=""
        
    }
    else{
        document.getElementById("email").style.border= "2px solid red"
        document.getElementById("emaile").innerHTML="Invalid email"

    }
}

function isphone(){
    let name_x=document.getElementById("phone").value
    var regex = /^[0-9]{10}$/;
    console.log("yes")
    if(regex.test(name_x))
    {
        document.getElementById("phone").style.border= "2px solid green"
        document.getElementById("phonee").innerHTML=""
        
    }
    else{
        document.getElementById("phone").style.border= "2px solid red"
        document.getElementById("phonee").innerHTML="Enter 10 digits"
        
    }
}

if(x==1){
  
}