function work()
{
    let r1=Number(Math.ceil(Math.random()*6));
    let r2=Number(Math.ceil(Math.random()*6));
    console.log("r1 :"+r1+"   r2 :"+r2);
    for(var i=1;i<=6;i++)
        document.querySelector("#b1"+i).style.backgroundColor="#d63e3e81";
    for(var i=1;i<=6;i++)
        document.querySelector("#b2"+i).style.backgroundColor="#d63e3e81";

    document.querySelector(".cen1").style.backgroundColor="#d63e3e81";
    document.querySelector(".cen2").style.backgroundColor="#d63e3e81";
    var roll=r1;
    var list=[];
    var bb="#b1"
    for(var i=0;i<2;i++)
    {
    if(roll===1)
        list=["center"];
    else if(roll===2)
        list=["1","6"];
    else if(roll===3)
        list=["1","6","center"];
    else if(roll===4)
        list=["1","2","5","6"];
    else if(roll===5)
        list=["1","2","5","6","center"];
    else if(roll===6)
        list=["1","2","3","4","5","6"];
    list.forEach(myfun);

    function myfun(item)
    {
        document.querySelector(bb+item).style.backgroundColor="white";
    }
    roll=r2;
    bb="#b2";
    }
    
    var res="";
    if(r1>r2)
        res="player 1 wins the game!";
    else if(r2>r1)
        res="player 2 wins the game!";
    else
        res="Draw";
        document.querySelector("#result").innerHTML=res;
}