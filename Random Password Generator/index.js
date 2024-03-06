let length1=document.getElementById("textbox");
const result=document.getElementById("show");
function generate()
{
    length=Number(length1.value);
    console.log(length);
    if(length>10)
    {
        result.textContent="Chutiye 10 ke upar nhi jaayega";
    }
    else if(length<8)
    { 
        result.textContent = "the password length should be atleast 8.";
    }
    else
    {
        let guess="ABCDEFGHIJKLMNopqrstuvwxyzOPQRSTUVWXYZ!@#*_-&^abcdefghijklmn";
        let ans="";
        for(let i=0; i<length; i++)
        {
            let ran=Math.floor(Math.random()*guess.length);
            ans+=guess.charAt(ran);
            
        }
        result.textContent=ans;
    }
}
