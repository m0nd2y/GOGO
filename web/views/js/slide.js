let a = false;
const maxPos = -40;
const minPos = -200;
const MINPos = -400;
const TIME = 800;
const DELAY = 10;
const speed= (maxPos-minPos)/(TIME / DELAY);
function code(){
    let table =document.getElementById('table');
    console.log(table.classList.hasOwnProperty(1));
    if( table.classList.hasOwnProperty(1) ){
        table.classList.remove('dis');
        movetoright( table, minPos );   
    }
    else{
        movetoleft( table, maxPos );
    }
}
function movetoright( table, pos ){
    table.style = `left: ${pos}px;`;
    console.log(pos);
    if( pos < maxPos )
        setTimeout( movetoright, DELAY, table, pos+speed);
}
function movetoleft( table, pos ){
    table.style = `left: ${pos}px;`;
    console.log(pos);
    if( pos > MINPos)
        setTimeout( movetoright, DELAY, table, pos-speed);
}