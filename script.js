const flip = document.querySelector('button');
const coin = document.querySelector('img');
const result=document.getElementById('result');
const sound=new Audio('/coinflip.mp3');
const flipper = function () {
    sound.play();
    coin.style.transition = 'transform 1s';
    coin.style.transform = 'rotateY(1200deg)'; 
    setTimeout(() => {
        const isHeads = Math.floor(Math.random()*2);
        coin.src = isHeads ? '/headssvg.svg' : '/tailssvg.svg';
        if(isHeads)
            result.textContent="head";
        else
            result.textContent="tail";
        coin.style.opacity = 1;
        coin.style.transform = 'rotateY(0deg)';
    }, 1000);
};

flip.addEventListener('click', flipper);
