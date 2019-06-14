var gameOn = false; 
var colorList = [ "red", "blue", "yellow", "green" ];
var thisRound = [];
var playerPicks = [];
var playersTurn = false; 
var level = 0;

var timeoutHandle;

var startButton = document.getElementById('start');
var greenButton = document.getElementById('green');
var redButton = document.getElementById('red');
var yellowButton = document.getElementById('yellow');
var blueButton = document.getElementById('blue');
var gameOverhead = document.getElementById('overhead'); 
var currentRound = document.getElementById('currentRound');



function nextRound(){
  playersTurn = false;
  startButton.style.display = 'none';
  currentRound.innerHTML = level;
  overhead.innerHTML = '- GAME STARTED -';
  let random = Math.floor( Math.random() * colorList.length );
  level++;
  console.log(thisRound);
  thisRound.push( colorList[ random ] );
  thisRound.forEach( ( color, index ) => {
        chooseColor( color, index );
  })
};



function clearColors(){
  blueButton.classList.remove( 'lightblue' );
  greenButton.classList.remove( 'lightgreen' );
  redButton.classList.remove( 'lightred' );
  yellowButton.classList.remove( 'lightyellow' );
}

function chooseColor( color, index ){
  
  timeoutHandle = setTimeout( function(){ 
      clearColors();
      
      switch( color ){

        case 'blue':
          
          console.log( 'highlighting blue' );
          blueButton.classList.add( 'lightblue' );
          break;
        case 'red':
          
          console.log( 'highlighting red' );
          redButton.classList.add( 'lightred' );
          break;
        case 'green':

          console.log( 'highlighting green' );
          greenButton.classList.add( 'lightgreen' );
          break;

        case 'yellow':
      
          console.log( 'highlighting yellow' );
          yellowButton.classList.add( 'lightyellow' );
          break;
      }}, ( index + 1 ) * 1250 ); 
   
    setTimeout( function(){
    
    clearColors();
    if( index + 1 == level ) playersTurn = true;
  }, ( index + 1 ) * 1400 );
}

function checkGame(){
  
  console.log( 'players array: ', playerPicks );
  console.log( 'this round: ', thisRound );

  let goodtogo = true; 
  playerPicks.forEach( ( color, index ) => {
    
    if( color != thisRound[ index ] ) goodtogo = false;
  })

  if( goodtogo ) {  
    console.log('YOU GOT THE RIGHT ONE');
    if( playerPicks.length == level ) {
      
      playerPicks = [];
      nextRound();
    }
  }
  else gameOver();  
}




function gameOver(){
  playersTurn = false;
  startButton.style.display = 'block';
  level = 0; 
  overhead.innerHTML = '- GAME OVER, START AGAIN -';
}



blueButton.addEventListener( 'click', function(e) {
  if( playersTurn ) {    
    chooseColor( 'blue', -0.85 );  
    playerPicks.push( 'blue' );
    checkGame();
  } else console.log( 'not your turn dude' );
});



redButton.addEventListener('click', function(e) {
  if( playersTurn ){
    chooseColor( 'red', -0.85 );
    playerPicks.push( 'red' );
    checkGame();
  } else console.log( 'not your turn dude' );
});



greenButton.addEventListener('click', function(e) {
  if( playersTurn ){
    chooseColor( 'green', -0.85 );
    playerPicks.push( 'green' );
    checkGame();
  } else console.log( 'not your turn dude' );
});



yellowButton.addEventListener('click', function(e) {
  if( playersTurn ){    
    chooseColor( 'yellow', -0.85 );
    playerPicks.push( 'yellow' );
    checkGame();
  } else console.log( 'not your turn dude' );
});



startButton.addEventListener('click', function(e) {
  thisRound = [];
  playerPicks = [];
  level = 0;
  gameOn = true;
  nextRound();
});