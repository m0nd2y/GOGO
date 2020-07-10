var objectsOfEffects = new Array();
const MaxSize = 18, MinSize = 10;
const MaxOpacity = 100, MinOpacity = 0;
const TIME = 500;
const DELAY = 50;
const opacitySpeed = (MaxOpacity-MinOpacity)/(TIME/DELAY);
const sizeSpeed = (MaxSize-MinSize)/(TIME/DELAY);
// TIME/((MaxSize-MinSize));

function init( ){
    objectsOfEffects.push( {
        'input': document.getElementById("inputIDTab"), 
        'label': document.getElementById("inputIDlabel"), 
        'check': false});
    objectsOfEffects.push( {'input': document.getElementById("inputPWTab"), 'label':  document.getElementById("inputPWlabel"), check: false});
    
    for ( obj of objectsOfEffects){
        obj['label'].classList.add('disable');
    }
    // objectsOfEffects.add( {'input': document.getElementById("inputPWtab"), 'label':  document.getElementById("inputPWlabel")});
}

// inputbox가 focus되었을 때 발생하는 효과
function effect( index ){
    
    console.log(index);
    // var inputbox = objectsOfEffects[index]["input"];
    // var text = objectsOfEffects[index].label;
    // var Style = "" ; // = inputbox.style;
    objectsOfEffects[index]["check"]=false;
    console.log(objectsOfEffects[index])
    objectsOfEffects[index]["input"].classList.remove("disable");
    A( index, MaxSize, MinOpacity);
}

function A( index, size, opacity ){
    let style = "";
    if( opacity >= MinOpacity){
        style += `opacity: ${opacity/100};`;
    }
    objectsOfEffects[index]['label'].style = style;
    console.log(style);
    
    if( opacity < MaxOpacity && objectsOfEffects[index]['check']==false ){
        setTimeout( A, DELAY, index, size - sizeSpeed, opacity+opacitySpeed );
    }else if(objectsOfEffects[index]['check']){
        HD(index);
    }
}

function HD( index ){
    objectsOfEffects[index]["check"]=true;
    objectsOfEffects[index]["label"].style = "opacity: 0.0;";
}
init();