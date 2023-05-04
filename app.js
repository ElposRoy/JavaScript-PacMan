let x='points',
    c='cherry',
    r='portalRight',
    l='portalLeft',
    s='sus',
    z='spike',
    gB='GoButton',
    sB='StopBUtton';
let board=[
    [3,1,1,1,1,1,1,1,1,1,1,1,1,1,4,0,3,1,1,1,1,1,1,1,1,1,1,1,1,1,4],
    [2,0,x,x,x,x,x,x,x,x,x,x,x,x,2,0,2,x,x,x,x,x,x,x,x,x,x,x,x,c,2],
    [2,x,7,1,8,x,x,7,1,1,1,8,x,x,6,1,5,x,x,7,1,1,1,8,x,x,7,1,8,x,2],
    [2,x,x,x,x,x,x,x,x,z,x,x,x,x,x,x,x,x,x,x,x,z,x,x,x,x,x,x,x,x,2],
    [2,x,x,z,x,x,x,x,x,x,x,x,x,x,x,z,x,x,x,x,x,x,x,x,x,x,x,z,x,x,2],
    [2,x,7,1,8,x,x,7,1,1,1,8,x,x,7,1,8,x,x,7,1,1,1,8,x,x,7,1,8,x,2],
    [2,c,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,c,2],
    [6,1,1,1,4,x,x,10,x,3,4,x,3,1,8,0,7,1,4,x,3,4,x,10,x,x,3,1,1,1,5],
    [0,0,0,0,2,x,x,2,x,6,5,x,2,0,0,gB,0,0,2,x,6,5,x,2,x,x,2,0,0,0,0],
    [7,1,1,1,5,x,x,2,c,x,x,x,11,0,3,1,4,0,11,x,x,x,c,2,x,x,6,1,1,1,8],    
    [l,x,x,x,x,x,z,12,1,1,8,x,0,x,2,0,2,x,0,x,7,1,1,13,z,x,x,x,x,x,r],
    [7,1,1,1,4,x,x,2,c,x,x,x,10,0,6,1,5,0,10,x,x,x,c,2,x,x,3,1,1,1,8],
    [0,0,0,0,2,x,x,2,x,3,4,x,2,0,0,sB,0,0,2,x,3,4,x,2,x,x,2,0,0,0,0],
    [3,1,1,1,5,x,x,11,x,6,5,x,6,1,8,0,7,1,5,x,6,5,x,11,x,x,6,1,1,1,4],
    [2,c,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,c,2],
    [2,x,7,1,8,x,x,7,1,1,1,8,x,x,7,1,8,x,x,7,1,1,1,8,x,x,7,1,8,x,2],
    [2,x,x,z,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,z,x,x,x,x,x,x,x,x,2],
    [2,x,x,x,x,x,x,x,x,z,x,x,x,x,x,z,x,x,x,x,x,x,x,x,x,x,x,z,x,x,2],
    [2,x,7,1,8,x,x,7,1,1,1,8,x,x,3,1,4,x,x,7,1,1,1,8,x,x,7,1,8,x,2],
    [2,c,x,x,x,x,x,x,x,x,x,x,x,x,2,0,2,x,x,x,x,x,x,x,x,x,x,x,x,c,2],
    [6,1,1,1,1,1,1,1,1,1,1,1,1,1,5,0,6,1,1,1,1,1,1,1,1,1,1,1,1,1,5]
];

let pacman = {
    x:1,
    y:1,
};
let sum=0;

function displayScore(score){
    
    document.getElementById("score").innerHTML=score;
}

function displayBoard(){
    let output='';

    for(let i=0; i<board.length; i++){
        output += '\n<div class="row">';
        for(let j=0; j<board[i].length; j++){

//Borders or Walls
            
            if(board[i][j]==1)
                output += '<div class="horizontal"></div>';
            else if(board[i][j]==2)
                output += '<div class="vertical"></div>';
            else if(board[i][j]==3)
                output += '<div class="downRight"></div>';
            else if(board[i][j]==4)
                output += '<div class="lftDown"></div>';
            else if(board[i][j]==5)
                output += '<div class="topLeft"></div>';
            else if(board[i][j]==6)
                output += '<div class="topRight"></div>';
            else if(board[i][j]==7)
                output += '<div class="LeftRound"></div>';
            else if(board[i][j]==8)
                output += '<div class="RightRound"></div>';
            else if(board[i][j]==9)
                output += '<div class="square"></div>';
            else if(board[i][j]==10)
                output += '<div class="TopRound"></div>';
            else if(board[i][j]==11)
                output += '<div class="BottomRound"></div>';
            else if(board[i][j]==12)
                output += '<div class="TriRight"></div>';
            else if(board[i][j]==13)
                output += '<div class="TriLeft"></div>';
                          



//Inside 
            else if(board[i][j]==0)
                output += '<div class="empty"></div>';
            else if(board[i][j]==x)
                output += '<div class="point"></div>';
            else if(board[i][j]==c)
                output += '<div class="cherry"></div>';
            else if(board[i][j]==l)
                output += '<div class="portalLeft"></div>';
            else if(board[i][j]==r)
                output += '<div class="portalRight"></div>';
     
            else if(board[i][j]==z)
                output += '<div class="Spike"></div>';
            else if(board[i][j]==gB)
                output += '<div  class="Go"></div>';
            else if(board[i][j]==sB)
                output += '<div class="Stop"></div>';
              
        }
        output += '</div>'
    }
    
    document.getElementById('layout').innerHTML=output;
}



displayCrewmate();
countdown(1);
displayBoard();
displayPacman();

document.onkeydown = function(e){ // Pacman Direction Position
    console.log(e.key);
    if(e.key =='ArrowRight'){
       pacmanStyles("pacmanRight");
        pacman.x++;
        if(board[pacman.y][pacman.x]>0){
            pacman.x--;
        }
        if(board[pacman.y][pacman.x]==r ){ //Right Teleport Position to Left
            pacman.x-=29;
        }

     
    }else if(e.key =='ArrowLeft'){
        pacmanStyles("pacmanLeft");
        pacman.x--;
        if(board[pacman.y][pacman.x]>0 ){
            pacman.x++;
        }
        if(board[pacman.y][pacman.x]==l ){ //Left Teleport Position to Right
            pacman.x+=29;
        }
        
    }else if(e.key =='ArrowUp'){
        pacmanStyles("pacmanUp");
        pacman.y--;
        if(board[pacman.y][pacman.x]>0 ){
            pacman.y++;
        }
    }else if(e.key =='ArrowDown'){
        pacmanStyles("pacmanDown");
        pacman.y++;
        if(board[pacman.y][pacman.x]>0){
            pacman.y--;
        }
   
    }

    //Movement and Obstacles
  
    switch (board[pacman.y][pacman.x]){
        case x:
            board[pacman.y][pacman.x]=0;
            sum=sum+1;
            beepAudio();
            break;
         
        case c:
            board[pacman.y][pacman.x]=0;
            sum=sum+5;
            beepAudio();
            break;
           
        case gB:
            CrewMateDance("Dance","Dance2","Dance3","Dance4","Dance5");
            playAudio();
            break;
        case sB:
            CrewMateDance("sus","","","","");
            pauseAudio();

            break;
        case z:
           alert("You got spiked! GAME OVER\n Your Score is : "+sum+"!",deathAudio(), pauseAudio());
       
           location.reload(); 
            break;
       
   
    }

    if(sum==370){
        alert("Thank you for playing ! \n Your Score is : "+sum+"!");
        location.reload(); 
    }
    console.log(board);
    console.log(pacman.y + " " + pacman.x);
    displayBoard();
    displayPacman();
    displayScore(sum);
}