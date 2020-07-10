const HEIGHT = 20;
const L = "%";
const SPEED = 2.8;
const TIME = 15;
var height;

function opennn(){
    
    let inner=document.getElementById("inner");
    let vh=document.getElementById("bg-f").clientHeight;
    let rh=document.getElementById("inner").clientHeight;
    if( rh >= vh ){     
        inner.style.height = vh;
        return 
    }
    
    //console.log(inner.style.height);
    if( inner.style.height == "" ) {
        height = HEIGHT;
    }
    document.getElementById("inner").style.height=`${height}${L}`;
    height+=SPEED;
    console.log(`vh: ${vh}, rh: ${rh}`);
    setTimeout(opennn, TIME );
}