var points=100;
var attackpoints=10;
const p=document.getElementById('info');

function attack(){
    var newpoints = points-attackpoints;

    if(newpoints<=0){
        p.innerHTML='game over';
        document.getElementById('at-c1').style.display="none";
        document.getElementById('reset-btn').style.display="block";
    }else{
        points=newpoints;
        display();
    }
    
} 
function display(){
    p.innerHTML=`points: ${points}    attack:${attackpoints}`;
}
display();
function reset(){
    points=100;
    document.getElementById
    ('at-c1').style.display="block";
    display(); 
}

var points=100;
var attackpoints=10;
const p=document.getElementById('opponent');



function attack(){
    var newpoints = points-attackpoints;

    if(newpoints<=0){
        p.innerHTML='game over';
        document.getElementById('at-c2').style.display="none";
        document.getElementById('2reset-btn').style.display="block";
    }else{
        points=newpoints;
        display();
    }
    
} 
function display(){
    p.innerHTML=`points: ${points}    attack:${attackpoints}`;
}
display();
function reset(){
    points=100;
    document.getElementById
    ('at-c2').style.display="block";
    display(); 
}
