

const display=document.getElementById("display");
function append(input)
{
    display.value+=input;
   // console.log(display.value);
}

function cleartext()
{
    display.value = "";
    //console.log(txt);
}
function calculate()
{  
    try{
        display.value=eval(display.value);
    }
    catch(err)
    {
        //console.log="error";
        display.value="Error";
    }
    
}