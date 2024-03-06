const set=document.getElementById("clock");
function updateclock()
{
    const time=new Date();
    console.log()
    let hours=time.getHours().toString().padStart(2, 0);
    hours=hours%12;
    if(hours==0)
    {
        hours=12;
    }
    const minutes=time.getMinutes().toString().padStart(2, 0);
    const seconds=time.getSeconds().toString().padStart(2, 0);
    set.textContent=hours+":"+minutes+":"+seconds;
}
updateclock();
setInterval(updateclock, 1000);