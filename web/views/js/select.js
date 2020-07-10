var data, type;
function read(){
    element = document.getElementById("datahidden");
    data = element.innerHTML;
    element = document.getElementById("typehidden");
    type = element.innerHTML;
}

function change(N){
    element = document.getElementById(type);
    element.classList.remove( 'selected' );
    
    if( N == 1){
        element = document.getElementById("first");
        element.classList.add('selected');
        type="first";
        element = document.getElementById("maintext");
        element.innerHTML = "&nbsp;&nbsp;일별";
        draw();
    }


    if( N == 2){
        element = document.getElementById("second");
        element.classList.add('selected');
        type="second";
        element = document.getElementById("maintext");
        element.innerHTML = "&nbsp;&nbsp;주별";
        draw();
    }

    if( N == 3){
        element = document.getElementById("third");
        element.classList.add('selected');
        type = "third";
        element = document.getElementById("maintext");
        element.innerHTML = "&nbsp;&nbsp;월별";
        draw();
    }
    
}