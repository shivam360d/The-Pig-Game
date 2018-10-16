/*
GAME RULES:
- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game
-no two consecutive sixes
-add input in html doc to set the winning score
-add another dice such that if one of them gets one then the score becomes zero
*/
var score,roundscorePrevious,roundscore,activeplayer,dice,gameplayed;
gameplayed=true;
init();
var lastdice;
document.querySelector('.btn-roll').addEventListener('click', function(){
    //get a random number and display it in the form of dice image
    if(gameplayed){
    var dice= Math.floor(Math.random()*6) + 1;
    var diceDom = document.querySelector('.dice');
    diceDom.style.display = 'block';
    diceDom.src= 'dice-' + dice + '.png' ;
    
    //update the current score and display it too
    if(dice==6 && lastdice==6){
        score[activeplayer]=0;
        document.querySelector('#score-' + activeplayer).textContent = score[activeplayer];
        NextPlayer();
        }
    else if(dice!==1){  
    roundscorePrevious=roundscore;
    roundscore += dice;
    document.querySelector('#current-' + activeplayer).textContent= roundscore;
    }
    else NextPlayer();
    lastdice=dice;
}
});

document.querySelector('.btn-hold').addEventListener('click', function(){ var winningscore;
        if(gameplayed){
        score[activeplayer]+=roundscore;
        document.querySelector('#score-' + activeplayer).textContent = score[activeplayer];
        //change the player
        winningscore=document.getElementById('ten')
        if(score[activeplayer]>=20){
            //winner
            gameplayed=false;
            document.querySelector('#name-' + activeplayer).textContent='winner!';
            document.querySelector('.dice').style.display='none';
            document.querySelector('.player-' + activeplayer + '-panel').classList.add('winner');
            document.querySelector('.player-' + activeplayer + '-panel').classList.remove('active');
        }
        else NextPlayer();
    }
});

document.querySelector('.btn-new').addEventListener('click', init);

function init(){
score=[0, 0];
roundscorePrevious = 0;
roundscore = 0 ;
activeplayer = 0 ;
gameplayed=true;
document.getElementById('score-0').textContent = '0';
document.getElementById('score-1').textContent = '0' ;
document.getElementById('current-0').textContent = '0';
document.getElementById('current-1').textContent = '0';

document.querySelector('.dice').style.display= 'none';

document.querySelector('#name-0').textContent='Player-1';
document.querySelector('#name-1').textContent='Player-2';

document.querySelector('.player-0-panel').classList.add('active');
document.querySelector('.player-1-panel').classList.remove('active');

document.querySelector('.player-0-panel').classList.remove('winner');
document.querySelector('.player-1-panel').classList.remove('winner');
}

function NextPlayer(){
    roundscore=0;
    roundscorePrevious=0;
        activeplayer === 0 ? activeplayer=1 : activeplayer=0 ;
        document.getElementById('current-0').textContent='0';
        document.getElementById('current-1').textContent='0';

        document.querySelector('.dice').style.display='none';

        document.querySelector('.player-0-panel').classList.toggle('active');
        document.querySelector('.player-1-panel').classList.toggle('active');
}