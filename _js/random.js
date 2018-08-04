window.onload = init;

var nikod;

function init()
{
   nikod = 10;
   id_score.innerHTML = nikod ;
   
  declarBtns();
   
}
function onRollClick ()
{
    var rnd=Math.random()*6;
    var rnd1=Math.random()*6;
    //rnd = Math.floor(rnd);
    rnd = Math.ceil(rnd);
    rnd1 = Math.ceil(rnd1);
    id_h2.innerHTML = rnd+rnd1 ;
    id_img.src="_images/dice"+rnd+".png"
    id_img1.src="_images/dice"+rnd1+".png"
    
        if(rnd+rnd1 >= 7)
    {
        nikod++;
        id_score.innerHTML = nikod ;
    }
    else{
        nikod--;
        id_score.innerHTML = nikod ;
    }

    if(nikod >= 20)
    {
        alert("You Win!");
        id_mor.innerHTML = "You Win!";
        id_mor.style.color = "green";
    }
    
    if(nikod <= 0)
    {
        id_mor.innerHTML = "You Lose!";
        id_mor.style.color = "red";
    }
  
}

function declarBtns()
{
    $(".burger").on("click",function(){
        $("nav ul").toggle(700);
    })
}