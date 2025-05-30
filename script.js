const flip = document.querySelector('button');
const coin = document.querySelector('img');
const result=document.getElementById('result');
const sound=new Audio('coinflip.mp3');
  let flag;
const flipper = function () {
    if(flag==true)
        return;
    flag=true;
    sound.play();
    coin.style.transition = 'transform 2s';
    coin.style.transform = 'rotateY(9000deg)'; 
    setTimeout(() => {
        const isHeads = Math.floor(Math.random()*2);
        coin.src = isHeads ? 'headssvg.svg' : 'tailssvg.svg';
        coin.style.opacity = 1;
        coin.style.transition='transform 1s';
        coin.style.transform = 'rotateY(0deg)';
        setTimeout(()=>{
         if(isHeads)
            result.textContent="head";
        else
            result.textContent="tail";
       },1000);
    }, 1000);
     flag=false;
};

flip.addEventListener('click', flipper);
